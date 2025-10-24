using CarAuctionSystem.DTOs;
using CarAuctionSystem.Interfaces;
using CarAuctionSystem.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarAuctionSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
       private readonly ICarService _carService;
        public CarController(ICarService carService)
        {
           _carService = carService;
        }

        // create a new car or add a car for auction
        [HttpPost("create")]
        public async Task<IActionResult> create([FromForm] CarDto dto)
        {
            var addCar = await _carService.AddCarAsync(dto);
            return Ok(addCar);
        }

        // get all cars for auction
        [HttpGet]
        public async Task<IActionResult> getAllCars()
        {
           var cars = await _carService.GetAllCarsAsync();
            return Ok(cars);
        }

        // return a single car by id
        [HttpGet("id")]
        public async Task<IActionResult> getCarById(int id)
        {
            var car = await _carService.GetCarByIdAsync(id);
            if (car == null) NotFound();
            return Ok(car);
        }

        // Admin: list pending
        [HttpGet("pending")]
        //[Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetPending()
        {
            var list = await _carService.GetPendingApprovalAsync();
            return Ok(list);
        }

        // Admin: approve/reject
        [HttpPut("{id}/approve")]
        //[Authorize(Roles = "Admin")]
        public async Task<IActionResult> ApproveOrReject(int id, [FromBody] CarApproveDto dto)
        {
            var result = await _carService.ApproveOrRejectAsync(id, dto);
            if (result == null) return NotFound();
            return Ok(result);
        }

        // Admin: schedule auction for a car
        [HttpPost("{id}/schedule-auction")]
        //[Authorize(Roles = "Admin")]
        public async Task<IActionResult> ScheduleAuction(int id, [FromBody] AuctionCreateDto dto)
        {
            var auction = await _carService.ScheduleAuctionAsync(id, dto);
            return Ok(auction);
        }
    }
}
