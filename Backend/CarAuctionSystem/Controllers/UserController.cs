using CarAuctionSystem.DTOs;
using CarAuctionSystem.Interfaces;
using CarAuctionSystem.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarAuctionSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

         //register new user
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromForm] UserRegisterDto dto)
        {
            var (user, password) = await _userService.RegisterAsync(dto);
            return Ok(new { user.Id, user.Name, user.Email, user.Role, DefaultPassword = password });
        }

        // get all users
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _userService.GetAllUsersAsync();
            return Ok(users);
        }

        // return single user by id
        [HttpGet("id")]
        public async Task<IActionResult> Get(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);
                if(user == null)
            {
                return NotFound();
            }
                return Ok(user);    
        }
    }

}
