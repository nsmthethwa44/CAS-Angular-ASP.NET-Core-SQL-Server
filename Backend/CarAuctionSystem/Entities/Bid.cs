namespace CarAuctionSystem.Entities
{
    // bid model or entity
    public class Bid
    {
        public int Id { get; set; }
        public int? AuctionId { get; set; }
        public Auction? Auction { get; set; }
        public int? BidderId { get; set; }
        public User? Bidder { get; set; }
        public decimal Price { get; set; }
        public DateTime BidTime { get; set; } = DateTime.UtcNow;
        public bool IsActive { get; set; } = true;
        public Payment? Payment { get; set; }
    }
}
