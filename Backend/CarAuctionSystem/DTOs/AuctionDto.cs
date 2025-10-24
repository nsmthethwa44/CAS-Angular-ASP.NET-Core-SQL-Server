namespace CarAuctionSystem.DTOs
{

    // use auction DTOs to secure models from getting exposed
    public class AuctionCreateDto
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }

    public class AuctionResponseDto
    {
        public int Id { get; set; }
        public int? CarId { get; set; }
        public string? Name { get; set; }
        public int? Year { get; set; }
        public decimal? Price { get; set; }
        public string? ImageUrl { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; } = string.Empty;
    }

}
