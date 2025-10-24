using System.Data;
using System.Security.Cryptography;

namespace CarAuctionSystem.Entities
{
    // user model or entity
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public DateTime DateCreated { get; set; } = DateTime.UtcNow;
        public string Role { get; set; } = string.Empty;
        public string? ImageUrl { get; set; }
        public ICollection<Car> Cars { get; set; } = new List<Car>();
        public ICollection<Bid> Bids { get; set; } = new List<Bid>();
    }
}
