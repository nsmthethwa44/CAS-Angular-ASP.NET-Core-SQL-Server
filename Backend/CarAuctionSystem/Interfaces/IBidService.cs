using CarAuctionSystem.DTOs;

namespace CarAuctionSystem.Interfaces
{
    // create service bid contracts methods
    // get, add, and update methods
    public interface IBidService
    {
        Task<BidResponseDto> PlaceBidAsync(int bidderId, BidCreateDto dto);
        Task<IEnumerable<BidResponseDto>> GetMyBidsAsync(int bidderId);
        Task<IEnumerable<BidSummaryDto>> GetTopBiddersAsync(int ownerId);

    }
}
