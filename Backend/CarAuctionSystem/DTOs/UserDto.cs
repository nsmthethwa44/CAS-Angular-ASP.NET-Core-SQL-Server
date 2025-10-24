namespace CarAuctionSystem.DTOs
{
    // use user DTOs to secure models from getting exposed
    public class UserRegisterDto
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public IFormFile? ImageUrl { get; set; }  // Renamed for clarity
    }

    public class LoginDto {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
  
}
