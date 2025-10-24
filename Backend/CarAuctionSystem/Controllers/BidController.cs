using CarAuctionSystem.DTOs;
using CarAuctionSystem.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace CarAuctionSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize(Roles = "Bidder")]
    public class BidController : ControllerBase
    {
        private readonly IBidService _service;
        public BidController(IBidService service) => _service = service;

         //user place a bid
         // catch any errors if user entered incorrect values
        [HttpPost("place")]
        public async Task<IActionResult> PlaceBid([FromBody] BidCreateDto dto)
        {
            try
            {
                var bidderId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
                var bid = await _service.PlaceBidAsync(bidderId, dto);
                return Ok(bid);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message }); // readable error
            }
        }

        // return top bidders 
        [HttpGet("top-bidders")]
        public async Task<IActionResult> GetTopBidders()
        {
            var ownerId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0");
            if (ownerId == 0)
                return Unauthorized("Invalid owner.");

            var result = await _service.GetTopBiddersAsync(ownerId);
            return Ok(result);
        }

        // retuen the logged-in user bids
        [HttpGet("my-bids")]
        public async Task<IActionResult> GetMyBids()
        {
            var bidderId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            return Ok(await _service.GetMyBidsAsync(bidderId));
        }
    }

}
