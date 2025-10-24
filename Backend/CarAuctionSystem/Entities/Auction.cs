using CarAuctionSystem.Enums;
using System.Security.Cryptography;

namespace CarAuctionSystem.Entities
{
    // auction model or entity
    public class Auction
    {
        public int Id { get; set; }
        public int? CarId { get; set; }
        public Car? Car { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; } = AuctionStatuses.Scheduled;
        public ICollection<Bid> Bids { get; set; } = new List<Bid>();
    }


}
