using CarAuctionSystem.Enums;

namespace CarAuctionSystem.Entities
{
    // car model or entity
    public class Car
    {
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Year { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public User? Owner { get; set; }
        public string Status { get; set; } = Statuses.Draft;  // Draft, Active, Sold, Cancelled
        public DateTime DateListed { get; set; } = DateTime.UtcNow;
        public Auction? Auction { get; set; }
    }
}
