using CarAuctionSystem.DTOs;
using CarAuctionSystem.Entities;

namespace CarAuctionSystem.Interfaces
{
    //create car service contracts methods
    // get, add, and update methods
    public interface ICarService
    {
        Task<Car?> AddCarAsync(CarDto dto);
        Task<IEnumerable<CarResponseDto>> GetAllCarsAsync();
        Task<Car?> GetCarByIdAsync(int id);
        Task<IEnumerable<CarResponseDto>> GetPendingApprovalAsync();
        Task<CarResponseDto?> ApproveOrRejectAsync(int carId, CarApproveDto dto);
        Task<AuctionResponseDto> ScheduleAuctionAsync(int carId, AuctionCreateDto dto);
    }
}
