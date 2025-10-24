using CarAuctionSystem.Data;
using CarAuctionSystem.Entities;
using CarAuctionSystem.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CarAuctionSystem.Repositories
{
    public class OwnerRepository : IOwnerRepository
    {
        private readonly AppDbContext _db;
        public OwnerRepository(AppDbContext db) => _db = db;

        public async Task<IEnumerable<Car>> GetMyCarsAsync(int ownerId)
        {
            return await _db.Cars.Where(c => c.OwnerId == ownerId).ToListAsync();
        }

        public async Task<IEnumerable<Auction>> GetMyAuctionsAsync(int ownerId)
        {
            return await _db.Auctions
                .Include(a => a.Car)
                .Where(a => a.Car.OwnerId == ownerId)
                .ToListAsync();
        }

        public async Task<IEnumerable<Bid>> GetBidsOnMyCarsAsync(int ownerId)
        {
            return await _db.Bids
                .Include(b => b.Auction).ThenInclude(a => a.Car)
                .Include(b => b.Bidder)
                .Where(b => b.Auction.Car.OwnerId == ownerId)
                .ToListAsync();
        }
    }
}
