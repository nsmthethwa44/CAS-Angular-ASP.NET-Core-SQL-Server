using CarAuctionSystem.Data;
using CarAuctionSystem.DTOs;
using CarAuctionSystem.Entities;
using CarAuctionSystem.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CarAuctionSystem.Services
{
    public class BidService : IBidService
    {
        private readonly IBidRepository _repo;
        private readonly AppDbContext _db;

        public BidService(IBidRepository repo, AppDbContext db)
        {
            _repo = repo;
            _db = db;
        }

        public async Task<BidResponseDto> PlaceBidAsync(int bidderId, BidCreateDto dto)
        {
            var auction = await _db.Auctions.Include(a => a.Car).FirstOrDefaultAsync(a => a.Id == dto.AuctionId);
            if (auction == null || auction.Status != "Active")
                throw new Exception("Auction not available for bidding.");

            var bid = new Bid
            {
                AuctionId = dto.AuctionId,
                BidderId = bidderId,
                Price = dto.Price,
                BidTime = DateTime.UtcNow,
                IsActive = true
            };

            var saved = await _repo.AddAsync(bid);

            return new BidResponseDto
            {
                Id = saved.Id,
                AuctionId = saved.AuctionId!.Value,
                CarName = auction.Car?.Name,
                Price = saved.Price,
                BidTime = saved.BidTime,
                IsActive = saved.IsActive
            };
        }

        public async Task<IEnumerable<BidResponseDto>> GetMyBidsAsync(int bidderId)
        {
            var bids = await _repo.GetByBidderAsync(bidderId);

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

        public async Task<IEnumerable<BidSummaryDto>> GetTopBiddersAsync(int ownerId)
        {
            return await _repo.GetTopBiddersAsync(ownerId);
        }

    }

}
