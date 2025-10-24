using CarAuctionSystem.Entities;

namespace CarAuctionSystem.Interfaces
{
    //create repo carOwner contracts methods
    // get, add, and update methods
    public interface IOwnerRepository
    {
        Task<IEnumerable<Car>> GetMyCarsAsync(int ownerId);
        Task<IEnumerable<Auction>> GetMyAuctionsAsync(int ownerId);
        Task<IEnumerable<Bid>> GetBidsOnMyCarsAsync(int ownerId);
    }
}
