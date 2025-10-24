import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { baseUrl } from '../../env/env';
import { Auction } from '../../models/auction';
import { CarAuctionService } from '../../services/car-auction-service';
import { BidderModalBidComponent } from '../bidder-modal-bid-component/bidder-modal-bid-component';


@Component({
  selector: 'app-bidder-browse-component',
  imports: [ CommonModule, BidderModalBidComponent ],
  templateUrl: './bidder-browse-component.html',
  styleUrl: './bidder-browse-component.scss'
})
export class BidderBrowseComponent implements OnInit{
  user!: User
 auctions: Auction[] = [];
  private baseUrl = baseUrl;
  constructor(private auctionSer: CarAuctionService, private authSer: AuthService){}
  showBidModal = false;
  selectedAuctionId!: number | null;

  openBidModal(id: number) {
    this.showBidModal = !this.showBidModal;
    this.selectedAuctionId = id;
  }
  
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
