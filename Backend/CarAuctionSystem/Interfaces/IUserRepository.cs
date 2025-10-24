using CarAuctionSystem.DTOs;
using CarAuctionSystem.Entities;

namespace CarAuctionSystem.Interfaces
{
    public interface IUserRepository
    {
        // user properties or methods
       Task<User?> GetUserByIdAsync(int id);
       Task<IEnumerable<User>> GetAllUsersAsync();
       Task<User?> RegisterAsync(User user);
       Task<bool> DeleteUserByIdAsync(int id);
       Task<User?> GetByEmailAsync(string email);
        //Task UpdateAsync(User user);  
    }
}
