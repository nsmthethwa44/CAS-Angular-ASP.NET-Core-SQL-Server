using CarAuctionSystem.DTOs;
using CarAuctionSystem.Entities;
using CarAuctionSystem.Enums;
using CarAuctionSystem.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace CarAuctionSystem.Services
{
    public class CarService : ICarService
    {
        private readonly ICarRepository _repo;
        private readonly IAuctionRepository _auctionRepo;
        public CarService(ICarRepository repo, IAuctionRepository auctionRepo)
        {
            _repo = repo;
            _auctionRepo = auctionRepo;
        }

        public async Task<Car?> AddCarAsync(CarDto dto)
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

            var car = new Car
            {
                OwnerId = dto.OwnerId,
                Name = dto.Name,
                Year = dto.Year,
                Price = dto.Price,
                Description = dto.Description,
                ImageUrl = imageUrl,
            };

            var addedCard = await _repo.AddCarAsync(car);
            return addedCard;
        }

        // get all cars 
        public async Task<IEnumerable<CarResponseDto>> GetAllCarsAsync()
        {
            var cars = await _repo.GetAllCars()
                .OrderByDescending(c => c.Id)
                .ToListAsync();

            return cars.Select(c => new CarResponseDto
            {
                Id = c.Id,
                Name = c.Name,
                Year = c.Year,
                Price = c.Price,
                Status = c.Status,
                Description = c.Description,
                OwnerId = c.Owner?.Id,
                OwnerName = c.Owner?.Name,
                ImageUrl = c.ImageUrl,
                OwnerImageUrl = c.Owner?.ImageUrl,
                DateListed = c.DateListed
            });
        }


        public async Task<Car?> GetCarByIdAsync(int id)
        {
            return await _repo.GetCarByIdAsync(id);    
        }

        public async Task<IEnumerable<CarResponseDto>> GetPendingApprovalAsync()
        {
            var list = await _repo.GetPendingApprovalAsync();
            return list.Select(MapToResponse);
        }

        public async Task<CarResponseDto?> ApproveOrRejectAsync(int carId, CarApproveDto dto)
        {
            var car = await _repo.GetCarByIdAsync(carId);
            if (car == null) return null;

            if (dto.Approve)
            {
                car.Status = Statuses.Approved;
            }
            else
            {
                car.Status = Statuses.Rejected;
            }

            await _repo.UpdateAsync(car);
            return MapToResponse(car);
        }

        public async Task<AuctionResponseDto> ScheduleAuctionAsync(int carId, AuctionCreateDto dto)
        {
            var car = await _repo.GetCarByIdAsync(carId) ?? throw new Exception("Car not found");
            if (car.Status != Statuses.Approved)
                throw new InvalidOperationException("Only approved cars can be scheduled for auction.");

            if (dto.EndDate <= dto.StartDate)
                throw new ArgumentException("EndDate must be after StartDate.");

            // create auction
            var auction = new Auction
            {
                CarId = car.Id,
                StartDate = dto.StartDate.ToUniversalTime(),
                EndDate = dto.EndDate.ToUniversalTime(),
                Status = AuctionStatuses.Scheduled
            };

            var created = await _auctionRepo.AddAsync(auction);

            // update car status to OnAuction (logical marker)
            car.Status = Statuses.OnAuction;
            await _repo.UpdateAsync(car);

            return new AuctionResponseDto
            {
                Id = created.Id,
                CarId = created.CarId,
                StartDate = created.StartDate,
                EndDate = created.EndDate,
                Status = created.Status
            };
        }

        public async Task<CarResponseDto?> GetByIdAsync(int id)
        {
            var car = await _repo.GetCarByIdAsync(id);
            return car == null ? null : MapToResponse(car);
        }

        private static CarResponseDto MapToResponse(Car c) =>
            new CarResponseDto
            {
                Id = c.Id,
                OwnerId = c.OwnerId,
                Name = c.Name,
                Year = c.Year,
                Price = c.Price,
                Status = c.Status,
                DateListed = c.DateListed,
                ImageUrl = c.ImageUrl
            };
    }
}
