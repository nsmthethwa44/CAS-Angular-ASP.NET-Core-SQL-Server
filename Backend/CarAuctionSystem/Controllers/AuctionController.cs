using CarAuctionSystem.DTOs;
using CarAuctionSystem.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarAuctionSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionController : ControllerBase
    {
        private readonly IAuctionService _auctionService;
        public AuctionController(IAuctionService auctionService)
        {
            _auctionService = auctionService;
        }

        // start auction
        // only admin can use this method
        [HttpPut("{id}/start")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> StartAuction(int auctionId)
        {
            var result = await _auctionService.StartAuctionAsync(auctionId);
            if (result == null) return NotFound();
            return Ok(result);
        }

        // end auction
        [HttpPut("{id}/end")]
        public async Task<IActionResult> GetAuction(int auctionId)
        {
            var auction = await _auctionService.EndAuctionAsync(auctionId);
            return Ok(auction); // Implement as needed
        }

        // get all car auctions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AuctionResponseDto>>> GetAll()
        {
            var auctions = await _auctionService.GetAllAuctionsAsync();
            return Ok(auctions);
        }

    }
}
