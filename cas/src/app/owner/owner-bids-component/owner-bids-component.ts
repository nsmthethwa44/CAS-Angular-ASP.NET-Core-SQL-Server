import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../services/owner-service';
import { CommonModule } from '@angular/common';
import { baseUrl } from '../../env/env';
import { BidService } from '../../services/bid-service';

@Component({
  selector: 'app-owner-bids-component',
  imports: [CommonModule ],
  templateUrl: './owner-bids-component.html',
  styleUrl: './owner-bids-component.scss'
})
export class OwnerBidsComponent implements OnInit{
bids: any[] = [];
bidders: any[] = [];
private baseUrl = baseUrl;
constructor(private ownerSer: OwnerService, private bidSer: BidService){}

getBidsOnMyCars(){
  this.ownerSer.getBidsOnMyCar().subscribe((res) =>{
    console.log(res)
    this.bids = res;
  })
}

getTopBidders(){
    this.bidSer.getTopBidders().subscribe({
      next: (res) => {
        this.bidders = res;
      },
      error: () => {
       console.log("Failed to fetch top bidders!")
      }
    });
}

ngOnInit(): void {
  this.getBidsOnMyCars();
  this.getTopBidders();
}

 getImageUrl(path: string | undefined): string{
    return path ? `${this.baseUrl}${path}` : "assets/img/img-1.jpg"
  }
}
