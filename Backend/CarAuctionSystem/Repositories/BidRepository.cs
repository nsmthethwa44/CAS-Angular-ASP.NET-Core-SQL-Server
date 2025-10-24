using CarAuctionSystem.Data;
using CarAuctionSystem.Entities;
using CarAuctionSystem.Interfaces;
using Microsoft.EntityFrameworkCore;
using CarAuctionSystem.DTOs;

namespace CarAuctionSystem.Repositories
{
    public class BidRepository : IBidRepository // inject bid interface contracts methds
    {
        private readonly AppDbContext _db;
        public BidRepository(AppDbContext db) => _db = db;

        public async Task<Bid> AddAsync(Bid bid)
        {
            _db.Bids.Add(bid);
            await _db.SaveChangesAsync();
            return bid;
        }

        public async Task<IEnumerable<Bid>> GetByBidderAsync(int bidderId)
        {
            return await _db.Bids
                .Include(b => b.Auction)
                .ThenInclude(a => a.Car)
                .Where(b => b.BidderId == bidderId)
                .OrderByDescending(b => b.BidTime)
                .ToListAsync();
        }

        public async Task<IEnumerable<BidSummaryDto>> GetTopBiddersAsync(int ownerId)
        {
            return await _db.Bids
                .Include(b => b.Bidder)
                .Include(b => b.Auction).ThenInclude(a => a.Car)
                .Where(b => b.Auction.Car.OwnerId == ownerId)
                .GroupBy(b => new { b.BidderId, b.Bidder.Name, b.Bidder.ImageUrl })
                .Select(g => new BidSummaryDto
                {
                    BidderName = g.Key.Name ?? "Unknown",
                    BidderImageUrl = g.Key.ImageUrl,
                    TotalBids = g.Sum(b => b.Price),
                    NumberOfBids = g.Count()
                })
                .OrderByDescending(x => x.TotalBids)
                .Take(10) // limit top 10
                .ToListAsync();
        }

    }

}
