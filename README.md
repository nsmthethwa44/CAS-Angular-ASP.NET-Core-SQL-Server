Car Auction System - (Angular, ASP.NET Core Web API, SQL Server)

A full-stack car auction platform that allows vehicle owners to list cars for auction and enables authenticated users to place and track bids through a secure, role-based system.

Project Overview
- The Car Auction System digitizes the traditional vehicle auction process by providing a centralized web platform where:
- Car owners create and manage auctions
- Buyers place bids and track auction progress
- The system enforces fair bidding rules and role-based access

The application is built with clear separation of concerns to ensure predictable bidding behavior, secure access, and maintainable business logic.

User Roles & Flows:
- Car Owner:
	- Register and authenticate
	- Add and manage vehicles
	- Create auctions with defined rules
	- Monitor active and completed auctions

Bidder:
	- Browse available car auctions
	- Place bids on active auctions
	- Track bid history and auction outcomes

System Rules:
	- Only authenticated users can bid
	- Auctions enforce bid validation logic
	- Role-based access controls sensitive actions

Features:
- JWT-based authentication
- Role-based access control
- Vehicle listing and managemen
- Auction creation and lifecycle management
- Bid placement and tracking
- Real-time or near-real-time bid updates
- Secure API-driven architecture

Tech Stack:
- Frontend:
	- Angular
	- TypeScript
	- SCSS
	- Angular Router

- Backend:
	- ASP.NET Core Web API (.NET 8)
	- C#
	- Entity Framework Core
	- LINQ

- Database:
	- SQL Server
	- Architecture & Security
	- JWT Authentication
	- Role-Based Access Control (RBAC)

- SOLID principles:
	- Service / Repository pattern

Project Structure:
- /Backend    → ASP.NET Core Web API
- /cas        → Angular frontend
- /db         → SQL scripts

Setup & Run:
- Backend:
	- dotnet restore
	- dotnet run

- Frontend:
	- npm install
	- ng serve

Production Build:
- ng build --configuration production

Links:
- Live Demo: https://carauctionsystem.netlify.app/
- GitHub Repository: This Repo
