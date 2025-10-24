import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from '../../services/car-service';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-schedule-auction-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-schedule-auction-component.html',
  styleUrl: './admin-schedule-auction-component.scss'
})
export class AdminScheduleAuctionComponent {
 @Input() isVisible = false;
  @Input() carId!: number | null;
  scheduleForm!: FormGroup;

  constructor(private fb: FormBuilder, private carSer: CarService) {
    this.scheduleForm = this.fb.group({
      carId: [null, Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['carId'] && this.carId) {
      this.scheduleForm.patchValue({ carId: this.carId });
    }
  }

  closeIsVisible(): void {
    this.isVisible = false;
  }

  scheduleAuction(): void {
    if (this.scheduleForm.invalid) {
      alert('Please fill all fields');
      return;
    }

    const { carId, startDate, endDate } = this.scheduleForm.value;

    if (new Date(startDate) >= new Date(endDate)) {
      alert('End date must be after start date');
      return;
    }

    const data = { carId, startDate, endDate };

    Swal.fire({
            title: 'Scheduling Car Auction...',
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
          })
          this.closeIsVisible();
    this.carSer.scheduleAuction(data).subscribe({
      next: (res)  => {
         Swal.fire({
                  icon: 'success',
                  title: 'Car auction scheduled',
                  text: 'Car successfully scheduled for auction.',
                  timer: 1800,
                  showConfirmButton: false
                });
          console.log("Car Auction Successfully Schedule!", res)
      },
      error: (error) =>{
            Swal.fire({
                  icon: 'error',
                  title: 'Car auction scheduled',
                  text: 'Failed to schedule auction.',
                  timer: 1800,
                  showConfirmButton: false
                });
        console.log("Failed to schedule!", error)
      }
    })
  }
 
}
