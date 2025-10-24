using CarAuctionSystem.DTOs;
using CarAuctionSystem.Entities;

namespace CarAuctionSystem.Interfaces
{
    //create service user contracts methods
    // get, add, and update methods
    public interface IUserService
    {
        Task<(User user, string DefaultPassword)> RegisterAsync(UserRegisterDto dto);
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User?> GetUserByIdAsync(int id);
    }
}
