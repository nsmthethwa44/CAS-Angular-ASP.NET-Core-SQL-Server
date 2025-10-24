using CarAuctionSystem.Data;
using CarAuctionSystem.Entities;
using CarAuctionSystem.Enums;
using CarAuctionSystem.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CarAuctionSystem.Repositories
{
    public class CarRepository : ICarRepository
    {
        private readonly AppDbContext _db;
        public CarRepository(AppDbContext db) 
        { 
            _db = db;
        }

        public async Task<Car?> AddCarAsync(Car car)
        {
            _db.Cars.Add(car);
            await _db.SaveChangesAsync();
            return car;
        }

        public IQueryable<Car> GetAllCars()
        {
            return _db.Cars.Include(c => c.Owner);
        }

        public async Task<Car?> GetCarByIdAsync(int id)
        {
            return await _db.Cars.Include(c => c.Auction).FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<IEnumerable<Car>> GetPendingApprovalAsync()
        {
            return await _db.Cars.Where(c => c.Status == Statuses.Draft).ToListAsync();
        }

        public async Task UpdateAsync(Car car)
        {
            _db.Cars.Update(car);
            await _db.SaveChangesAsync();
        }

    }
}
