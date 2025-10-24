using CarAuctionSystem.Data;
using CarAuctionSystem.Entities;
using CarAuctionSystem.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CarAuctionSystem.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _db;
        public UserRepository(AppDbContext db)
        {
            _db = db;
        }

        // get single user
        public async Task<User?> GetUserByIdAsync(int id) =>
            await _db.Users.FindAsync(id);

        // get all users
        public async Task<IEnumerable<User>> GetAllUsersAsync() =>
            await _db.Users.ToListAsync();

        // create a users
        public async Task<User?> RegisterAsync(User user)
        {
            _db.Users.Add(user);
            await _db.SaveChangesAsync();  
            return user;
        }
         
        // delete single user
        public async Task<bool> DeleteUserByIdAsync(int id)
        {
            var user = await _db.Users.FindAsync(id);
            if(user == null)
            {
                return false;
            }
            _db.Users.Remove(user);
            _db.SaveChanges();
            return true;
        }

        //get user by email / this for login 
        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _db.Users.FirstOrDefaultAsync(u => u.Email == email);
        }
    }  
}
