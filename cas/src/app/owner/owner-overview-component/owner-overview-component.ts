import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { baseUrl } from '../../env/env';
import { Auction } from '../../models/auction';
import { CarAuctionService } from '../../services/car-auction-service';

@Component({
  selector: 'app-owner-overview-component',
  imports: [CommonModule],
  templateUrl: './owner-overview-component.html',
  styleUrl: './owner-overview-component.scss'
})
export class OwnerOverviewComponent implements OnInit{
  user!: User
 auctions: Auction[] = [];
  private baseUrl = baseUrl;
  constructor(private auctionSer: CarAuctionService, private authSer: AuthService){}
  
  getAuctions(): void {
    this.auctionSer.getAll().subscribe({
      next: (res) => {
        this.auctions = res;
      },
      error: (err) => console.error('Error fetching auctions', err),
    });
  }

 getImageUrl(path: string | undefined): string{
  return(path ? `${this.baseUrl}${path}` : ``)
 }

getUser(){
  this.user = this.authSer.getProfileFromToken();
}

ngOnInit(): void {
  this.getUser();
  this.getAuctions();
}

}
