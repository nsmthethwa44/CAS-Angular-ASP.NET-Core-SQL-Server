namespace CarAuctionSystem.DTOs
{
    // use car DTOs to secure models from getting exposed
    public class CarDto
    {
        public int OwnerId { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Year { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }
        public IFormFile? ImageUrl { get; set; }
    }

    public class CarResponseDto 
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Year { get; set; }
        public decimal Price { get; set; }
        public string? Status { get; set; }
        public string? Description { get; set; }
        public int? OwnerId { get; set; }
        public string? OwnerName { get; set; } 
        public string? ImageUrl { get; set; }
        public string? OwnerImageUrl { get; set; }
        //public string? DateListed { get; set; }
        public DateTime DateListed { get; set; }
    }

    public class CarApproveDto
    {
        public bool Approve { get; set; }   // true = approve, false = reject
    }
}
