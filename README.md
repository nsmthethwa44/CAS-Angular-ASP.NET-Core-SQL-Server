# Car Auction System  - Angular, ASP.NET Core Web API and SQL Server
A full-stack web application built with **ASP.NET Core Web API**, **Angular**, and **SQL Server** that allows car owners to list vehicles for auction and enables bidders to place and track bids in real-time.

---

## Features
- Car Owner registration and authentication
- Add and manage cars
- Create and manage auctions
- Place and track bids
- Real-time bid updates (SignalR or polling, depending on your implementation)
- Role-based user access

---

## Tech Stack
| Layer | Technology |
|------|------------|
| Backend | ASP.NET Core Web API (.NET 8) |
| Frontend | Angular |
| Database | SQL Server |
| Authentication | JWT Token Auth |
| Version Control | Git + GitHub |

---

## Project Structure
/Backend → ASP.NET Core Web API
/cas (or /ClientApp) → Angular Frontend
/db → SQL database scripts


---

## Getting Started

### Prerequisites
Make sure you have these installed:
- .NET 8 SDK  
- Node.js (v18+)  
- Angular CLI  
- SQL Server (LocalDB or full instance)  
- Visual Studio or VS Code

---

## Backend Setup (API)
1. Navigate into the backend project:
   ```bash
   cd Backend/CarAuctionSystem
Restore dependencies: 
dotnet restore

Update appsettings.json with your SQL connection string:

"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER;Database=CarAuctionDB;Trusted_Connection=True;"
}


Apply migrations (if applicable):

dotnet ef database update


Run the API:

dotnet run

Frontend Setup (Angular)

Navigate to the Angular project:

cd cas


Install dependencies:

npm install


Start the Angular app:

ng serve --open

Usage

Access the frontend in your browser at:

http://localhost:4200


Ensure the API is running on:

http://localhost:5000 (or the port specified in launchSettings.json)

Future Enhancements (Optional)

Payment integration
Auction scheduling
Email / SMS notifications
Admin dashboard for system monitoring

License
This project is for educational and portfolio purposes.

---
