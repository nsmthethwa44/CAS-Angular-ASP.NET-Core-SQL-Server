import { Component, OnInit } from '@angular/core';
import { BidService } from '../../services/bid-service';
import { CommonModule } from '@angular/common';
import { baseUrl } from '../../env/env';

@Component({
  selector: 'app-bidder-my-bids-component',
  imports: [CommonModule],
  templateUrl: './bidder-my-bids-component.html',
  styleUrl: './bidder-my-bids-component.scss'
})
export class BidderMyBidsComponent implements OnInit{
bids: any[] = [];
private baseUrl = baseUrl;
constructor(private bidSer: BidService){}

getMyBids(){
  this.bidSer.getMyBids().subscribe((res) =>{
    console.log(this.bids =res)
  })
}

ngOnInit(): void {
  this.getMyBids()
}

getImageUrl(path: string | undefined): string{
    return `${this.baseUrl}${path}`
  }
}
