using CarAuctionSystem.DTOs;

namespace CarAuctionSystem.Interfaces
{
    // create a login contract
    public interface IAuthService
    {
        Task<string?> LoginAsync(LoginDto dto);
    }
}
