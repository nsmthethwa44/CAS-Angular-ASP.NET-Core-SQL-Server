using CarAuctionSystem.DTOs;
using CarAuctionSystem.Interfaces;

namespace CarAuctionSystem.Services
{
    public class OwnerService : IOwnerService
    {
        private readonly IOwnerRepository _repo;
        public OwnerService(IOwnerRepository repo) => _repo = repo;

        public async Task<IEnumerable<CarResponseDto>> GetMyCarsAsync(int ownerId)
        {
            var cars = await _repo.GetMyCarsAsync(ownerId);
            return cars.Select(c => new CarResponseDto
            {
                Id = c.Id,
                Name = c.Name,
                Year = c.Year,
                Price = c.Price,
                Status = c.Status,
                Description = c.Description,
                ImageUrl = c.ImageUrl,
                DateListed = c.DateListed
            });
        }

        public async Task<IEnumerable<AuctionResponseDto>> GetMyAuctionsAsync(int ownerId)
        {
            var auctions = await _repo.GetMyAuctionsAsync(ownerId);
            return auctions.Select(a => new AuctionResponseDto
            {
                Id = a.Id,
                CarId = a.CarId ?? 0,
                Name = a.Car?.Name ?? "",
                ImageUrl = a.Car?.ImageUrl,
                Price = a.Car?.Price,
                StartDate = a.StartDate,
                EndDate = a.EndDate,
                Status = a.Status
            });
        }

        public async Task<IEnumerable<BidResponseDto>> GetBidsOnMyCarsAsync(int ownerId)
        {
            var bids = await _repo.GetBidsOnMyCarsAsync(ownerId);

            return bids.Select(b => new BidResponseDto
            {
                Id = b.Id,
                AuctionId = b.AuctionId ?? 0,
                CarName = b.Auction?.Car?.Name,
                CarImageUrl = b.Auction?.Car?.ImageUrl,
                Price = b.Price,
                BidTime = b.BidTime,
                IsActive = b.IsActive,
                BidderName = b.Bidder?.Name ?? string.Empty,
                BidderImageUrl = b.Bidder?.ImageUrl
            });
        }

    }

}
