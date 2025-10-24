using CarAuctionSystem.Data;
using CarAuctionSystem.DTOs;
using CarAuctionSystem.Entities;
using CarAuctionSystem.Interfaces;

namespace CarAuctionSystem.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repo;
        public UserService(IUserRepository repo)
        {
            _repo = repo;
        }

        // register or creating new users
        public async Task<(User user, string DefaultPassword)> RegisterAsync(UserRegisterDto dto)
        {
            // saving image
            string? imageUrl = null;

            if (dto.ImageUrl != null && dto.ImageUrl.Length > 0)
            {
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/uploads");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                var uniqueFileName = Guid.NewGuid().ToString() + Path.GetExtension(dto.ImageUrl.FileName);
                var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await dto.ImageUrl.CopyToAsync(stream);
                }

                imageUrl = $"/uploads/{uniqueFileName}";
            }

            var DefaultPassword = "12345";
            var PasswordHash = BCrypt.Net.BCrypt.HashPassword(DefaultPassword);

            var user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                Role = dto.Role,
                PasswordHash = PasswordHash,
                ImageUrl = imageUrl,
            };
            await _repo.RegisterAsync(user);
            return (user, DefaultPassword);
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await _repo.GetAllUsersAsync();
        }

        public async Task<User?> GetUserByIdAsync(int id)
        {
            return await _repo.GetUserByIdAsync(id);
        }
    }
}
