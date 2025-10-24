import { Component, OnInit } from '@angular/core';
import { Auction } from '../../models/auction';
import { CarAuctionService } from '../../services/car-auction-service';
import { CommonModule } from '@angular/common';
import { baseUrl } from '../../env/env';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-manage-auction',
  imports: [CommonModule],
  templateUrl: './admin-manage-auction.html',
  styleUrl: './admin-manage-auction.scss'
})
export class AdminManageAuction implements OnInit{
 auctions: Auction[] = [];
   private baseUrl = baseUrl;
  constructor(private auctionSer: CarAuctionService) {}

  ngOnInit() {
    this.auctionSer.getAll().subscribe((res) =>{
      this.auctions = res
    
    } );
  }

    getImageUrl(path: string | undefined): string{
    return `${this.baseUrl}${path}`
  }

  startAuction(id: number){
    Swal.fire({
        title: 'Starting Auction...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
      })

    this.auctionSer.startAuction(id).subscribe({
      next: (res) =>{
         Swal.fire({
            icon: 'success',
            title: 'Start Car Auction',
            text: 'Car successfully started auction.',
            timer: 1800,
            showConfirmButton: false
           });
      },
      error: (error) =>{
          Swal.fire({
                          icon: 'error',
                          title: 'Start Auction',
                          text: 'Failed to start auction.',
                          timer: 1800,
                          showConfirmButton: false
                        });
        console.log("Failed to start auction", error)
      }
    })
   
  }

   endAuction(id: number){
    Swal.fire({
        title: 'Ending Auction...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
      })

    this.auctionSer.endAuction(id).subscribe({
      next: (res) =>{
         Swal.fire({
            icon: 'success',
            title: 'EndCar Auction',
            text: 'Car successfully ended auction.',
            timer: 1800,
            showConfirmButton: false
           });
      },
      error: (error) =>{
          Swal.fire({
                          icon: 'error',
                          title: 'End Auction',
                          text: 'Failed to end auction.',
                          timer: 1800,
                          showConfirmButton: false
                        });
        console.log("Failed to end auction", error)
      }
    })
   
  }
}
