using CarAuctionSystem.Enums;

namespace CarAuctionSystem.Entities
{
    // payment model or entity
    public class Payment
    {
        public int Id { get; set; }
        public int? BidId { get; set; }
        public Bid? Bid { get; set; }
        public decimal Price { get; set; }
        public DateTime PaymentDate { get; set; } = DateTime.UtcNow;
        public string Status { get; set; } = Statuses.Pending; // Pending, Completed, Failed
    }
}
