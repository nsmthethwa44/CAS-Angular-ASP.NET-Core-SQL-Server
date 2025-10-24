using CarAuctionSystem.DTOs;
using CarAuctionSystem.Enums;
using CarAuctionSystem.Interfaces;
using CarAuctionSystem.Repositories;

namespace CarAuctionSystem.Services
{
    public class AuctionService : IAuctionService
    {
        private readonly IAuctionRepository _auctionRepo;
        private readonly ICarRepository _carRepo;

        public AuctionService(IAuctionRepository auctionRepo, ICarRepository carRepo)
        {
            _auctionRepo = auctionRepo;
            _carRepo = carRepo;
        }

        public async Task<AuctionResponseDto?> StartAuctionAsync(int auctionId)
        {
            var auction = await _auctionRepo.GetByIdAsync(auctionId);
            if (auction == null) return null;
            if (auction.Status != AuctionStatuses.Scheduled)
                throw new InvalidOperationException("Only scheduled auctions can be started.");

            auction.Status = AuctionStatuses.Active;
            await _auctionRepo.UpdateAsync(auction);

            // ensure car status = OnAuction
            var car = auction.Car;
            car.Status = Statuses.OnAuction;
            await _carRepo.UpdateAsync(car);

            return new AuctionResponseDto
            {
                Id = auction.Id,
                CarId = auction.CarId,
                StartDate = auction.StartDate,
                EndDate = auction.EndDate,
                Status = auction.Status
            };
        }

        public async Task<AuctionResponseDto?> EndAuctionAsync(int auctionId)
        {
            var auction = await _auctionRepo.GetByIdAsync(auctionId);
            if (auction == null) return null;
            if (auction.Status != AuctionStatuses.Active)
                throw new InvalidOperationException("Only active auctions can be ended.");

            auction.Status = AuctionStatuses.Ended;
            await _auctionRepo.UpdateAsync(auction);

            // Evaluate bids to determine winner not implemented here.
            // Update car to Sold/Unsold based on bids.
            var car = auction.Car;

            // simplified, if any bids -> Sold else Unsold (proper logic needs Bid repository)
            var hasBids = auction.Bids != null && auction.Bids.Count > 0;
            car.Status = hasBids ? Statuses.Sold : Statuses.UnSold;
            await _carRepo.UpdateAsync(car);

            return new AuctionResponseDto
            {
                Id = auction.Id,
                CarId = auction.CarId,
                StartDate = auction.StartDate,
                EndDate = auction.EndDate,
                Status = auction.Status
            };
        }


        public async Task<IEnumerable<AuctionResponseDto>> GetAllAuctionsAsync()
        {
            return await _auctionRepo.GetAllAsync();
        }


    }
}
