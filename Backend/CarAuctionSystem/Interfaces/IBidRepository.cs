using CarAuctionSystem.Entities;
using CarAuctionSystem.DTOs;

namespace CarAuctionSystem.Interfaces
{
    //create repo bid contracts methods
    // get, add, and update methods
    public interface IBidRepository
    {
        Task<Bid> AddAsync(Bid bid);
        Task<IEnumerable<Bid>> GetByBidderAsync(int bidderId);
        Task<IEnumerable<BidSummaryDto>> GetTopBiddersAsync(int ownerId);
    }
}
