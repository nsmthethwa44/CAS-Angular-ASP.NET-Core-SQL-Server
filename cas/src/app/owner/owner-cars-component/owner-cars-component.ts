import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../models/car';
import { OwnerService } from '../../services/owner-service';
import { baseUrl } from '../../env/env';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CarService } from '../../services/car-service';

@Component({
  selector: 'app-owner-cars-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './owner-cars-component.html',
  styleUrl: './owner-cars-component.scss'
})
export class OwnerCarsComponent implements OnInit{
cars: Car[] =[];
 carForm!: FormGroup;
  selectedFile: File | null = null;
  userId: number = 0;
@Input() isVisible = false
private baseUrl = baseUrl;
constructor(private ownerSer: OwnerService, private authSer: AuthService,
    private fb: FormBuilder, private carSer: CarService){}

getCars(){
  this.ownerSer.getMyCars().subscribe((res)=>{
    this.cars = res;
  })
}

closeIsVisible(){
  this.isVisible = false;
}

showIsVisible(){
  this.isVisible = !this.isVisible;
}

ngOnInit(): void {
   this.getCars();
    const user = this.authSer.getProfileFromToken();
    this.userId = user?.id ?? 0;

    this.carForm = this.fb.group({
      name: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      imageUrl: [null]
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.carForm.invalid) return;

    const formData = new FormData();
    formData.append('OwnerId', this.userId.toString());
    formData.append('Name', this.carForm.value.name);
    formData.append('Year', this.carForm.value.year);
    formData.append('Price', this.carForm.value.price);
    formData.append('Description', this.carForm.value.description);
    if (this.selectedFile) formData.append('ImageUrl', this.selectedFile);

    Swal.fire({
      title: 'Adding car...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    this.carSer.addCar(formData).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Car added successfully',
          timer: 1800,
          showConfirmButton: false
        });
        this.closeIsVisible();
        this.getCars();
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error adding car',
          text: 'Please try again later.'
        });
      }
    });
  }

 getImageUrl(path: string | undefined): string{
    return `${this.baseUrl}${path}`
  }
}
