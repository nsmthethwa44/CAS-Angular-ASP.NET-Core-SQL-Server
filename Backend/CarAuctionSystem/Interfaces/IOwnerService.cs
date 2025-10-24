using CarAuctionSystem.DTOs;

namespace CarAuctionSystem.Interfaces
{
    //create service carOwner contracts methods
    // get, add, and update methods
    public interface IOwnerService
    {
        Task<IEnumerable<CarResponseDto>> GetMyCarsAsync(int ownerId);
        Task<IEnumerable<AuctionResponseDto>> GetMyAuctionsAsync(int ownerId);
        Task<IEnumerable<BidResponseDto>> GetBidsOnMyCarsAsync(int ownerId);
    }
}
