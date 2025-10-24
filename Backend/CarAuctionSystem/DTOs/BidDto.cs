namespace CarAuctionSystem.DTOs
{
    // use bids DTOs to secure models from getting exposed
    public class BidDto
    {
        public int Id { get; set; }
        public decimal Price { get; set; }
        public DateTime BidTime { get; set; }
        public int BidderId { get; set; }
        public string? BidderName { get; set; }
        public string? BidderImageUrl { get; set; }
    }

    public class BidResponseDto
    {
        public int Id { get; set; }
        public int AuctionId { get; set; }
        public string? CarName { get; set; }
        public string? CarImageUrl { get; set; }
        public decimal Price { get; set; }
        public string BidderName { get; set; } = string.Empty;
        public string? BidderImageUrl { get; set; }
        public DateTime BidTime { get; set; }
        public bool IsActive { get; set; }
    }


    public class BidCreateDto
    {
        public int AuctionId { get; set; }
        public decimal Price { get; set; }
    }

    public class BidSummaryDto
    {
        public string BidderName { get; set; } = string.Empty;
        public string? BidderImageUrl { get; set; }
        public decimal TotalBids { get; set; } // how much they've bid overall
        public int NumberOfBids { get; set; } // how many bid
    }

}
