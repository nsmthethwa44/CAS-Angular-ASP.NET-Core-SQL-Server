using CarAuctionSystem.Data;
using CarAuctionSystem.DTOs;
using CarAuctionSystem.Entities;
using CarAuctionSystem.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CarAuctionSystem.Repositories
{
    public class AuctionRepository : IAuctionRepository // inject auction interface repo
    {
        private readonly AppDbContext _db;
        public AuctionRepository(AppDbContext db) 
        { 
           _db = db; // assign db context
        }

        // add new car for auction
        public async Task<Auction> AddAsync(Auction auction)
        {
            _db.Auctions.Add(auction);
            await _db.SaveChangesAsync();
            return auction;
        }

        // get auction by id 
        public async Task<Auction?> GetByIdAsync(int id)
        {
            return await _db.Auctions.Include(a => a.Car).FirstOrDefaultAsync(a => a.Id == id);
        }

        // update auction status 
        public async Task UpdateAsync(Auction auction)
        {
            _db.Auctions.Update(auction);
            await _db.SaveChangesAsync();
        }
        
        // get all auctions
        public async Task<IEnumerable<AuctionResponseDto>> GetAllAsync()
        {
            return await _db.Auctions
                .Include(a => a.Car)
                .Select(a => new AuctionResponseDto
                {
                    Id = a.Id,
                    CarId = a.CarId,
                    Name = a.Car != null ? a.Car.Name : null,
                    Year = a.Car != null ? a.Car.Year : (int?)null,
                    Price = a.Car != null ? a.Car.Price : (decimal?)null,
                    ImageUrl = a.Car != null ? a.Car.ImageUrl : null,
                    StartDate = a.StartDate,
                    EndDate = a.EndDate,
                    Status = a.Status
                })
                .ToListAsync();
        }

    }
}
