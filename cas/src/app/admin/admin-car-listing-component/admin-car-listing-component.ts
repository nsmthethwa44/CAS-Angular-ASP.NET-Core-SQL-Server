import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car-service';
import { CommonModule } from '@angular/common';
import { baseUrl } from '../../env/env';
import { AdminScheduleAuctionComponent } from "../admin-schedule-auction-component/admin-schedule-auction-component";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-car-listing-component',
  imports: [CommonModule, AdminScheduleAuctionComponent],
  templateUrl: './admin-car-listing-component.html',
  styleUrl: './admin-car-listing-component.scss'
})
export class AdminCarListingComponent implements OnInit{
  cars: Car[] = []
  constructor(private carSer: CarService){}
  private baseUrl = baseUrl;
  @Input() isVisible: boolean = false;
  selectedCarId: number | null = null

  getCars(){
    this.carSer.getCars().subscribe(res =>{
      this.cars = res
    })
  }

  openIsVisible(id: number): void {
    this.isVisible = !this.isVisible;
    this.selectedCarId = id;
  }

  ngOnInit(): void {
      this.getCars();
  }

  getImageUrl(path: string | undefined): string{
    return `${this.baseUrl}${path}`
  }

  approveAuction(id: number): void{
   Swal.fire({
    title: 'Are you sure, you want to approve this car auction?',
    text: 'This action cannot be undone!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, approve auction'
  }).then((res) =>{
    if(res.isConfirmed){
       Swal.fire({
        title: 'Approving Car Auction...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
      })
      this.carSer.approveAuction(id).subscribe(() =>{
        Swal.fire({
          icon: 'success',
          title: 'Car auction approved',
          text: 'You have successfully approved his car auction.',
          timer: 1800,
          showConfirmButton: false
        });
         this.getCars();
        //  console.log("id: ", id)
      })
    }
  }).catch((error) =>{
    Swal.fire("Error", 'Failed to approve car auction', 'error');
      console.error(error);
  })
}
}
