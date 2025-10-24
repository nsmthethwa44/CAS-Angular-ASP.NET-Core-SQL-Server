import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../services/owner-service';
import { CommonModule } from '@angular/common';
import { baseUrl } from '../../env/env';

@Component({
  selector: 'app-owner-auction-component',
  imports: [CommonModule],
  templateUrl: './owner-auction-component.html',
  styleUrl: './owner-auction-component.scss'
})
export class OwnerAuctionComponent implements OnInit {
 auctions: any[] = [];
 private baseUrl = baseUrl;
 constructor(private ownerSer: OwnerService){}

 getMyAuctions(){
  this.ownerSer.getMyAuctions().subscribe((res) =>{
    this.auctions = res
  })
 }

 ngOnInit(): void {
  this.getMyAuctions();
 }

getImageUrl(path: string | undefined): string{
    return `${this.baseUrl}${path}`
  }
}
