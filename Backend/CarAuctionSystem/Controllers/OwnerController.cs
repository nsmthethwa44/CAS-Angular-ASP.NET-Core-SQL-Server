using CarAuctionSystem.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace CarAuctionSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize(Roles = "Owner")]
    public class OwnerController : ControllerBase
    {
        private readonly IOwnerService _service;
        public OwnerController(IOwnerService service) => _service = service;

        // return owner cars 
        [HttpGet("my-cars")]
        public async Task<IActionResult> GetMyCars()
        {
            var ownerId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            return Ok(await _service.GetMyCarsAsync(ownerId));
        }

        // return owners cars for auction
        [HttpGet("my-auctions")]
        public async Task<IActionResult> GetMyAuctions()
        {
            var ownerId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            return Ok(await _service.GetMyAuctionsAsync(ownerId));
        }

        // return owner car bids
        [HttpGet("bids-on-my-cars")]
        public async Task<IActionResult> GetBidsOnMyCars()
        {
            var ownerId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            return Ok(await _service.GetBidsOnMyCarsAsync(ownerId));
        }
    }

}
