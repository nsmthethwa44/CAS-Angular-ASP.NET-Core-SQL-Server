using CarAuctionSystem.DTOs;

namespace CarAuctionSystem.Interfaces
{
    //create service auction contracts methods
    // get, add, and update methods
    public interface IAuctionService
    {
        Task<IEnumerable<AuctionResponseDto>> GetAllAuctionsAsync();
        Task<AuctionResponseDto?> StartAuctionAsync(int auctionId);
        Task<AuctionResponseDto?> EndAuctionAsync(int auctionId);
    }
}
