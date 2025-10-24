using CarAuctionSystem.DTOs;
using CarAuctionSystem.Entities;

namespace CarAuctionSystem.Interfaces
{
     //create repo auction contracts methods
     // get, add, and update methods
    public interface IAuctionRepository
    {
        Task<Auction> AddAsync(Auction auction);
        Task<Auction?> GetByIdAsync(int id);
        Task<IEnumerable<AuctionResponseDto>> GetAllAsync();
        Task UpdateAsync(Auction auction);
    }
}
