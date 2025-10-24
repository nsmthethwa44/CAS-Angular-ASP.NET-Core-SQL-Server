using CarAuctionSystem.DTOs;
using CarAuctionSystem.Entities;

namespace CarAuctionSystem.Interfaces
{
    //create repo car contracts methods
    // get, add, and update methods
    public interface ICarRepository
    {
        Task<Car?> AddCarAsync(Car car);
        IQueryable<Car> GetAllCars();
        Task<Car?> GetCarByIdAsync(int  id);
        Task<IEnumerable<Car>> GetPendingApprovalAsync();
        Task UpdateAsync(Car car);
    }
}
