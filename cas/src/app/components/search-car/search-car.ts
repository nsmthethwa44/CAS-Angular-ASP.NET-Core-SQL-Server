import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../../models/car';
import { CarService } from '../../services/car-service';
import { baseUrl } from '../../env/env';

@Component({
  selector: 'app-search-car',
  imports: [CommonModule],
  templateUrl: './search-car.html',
  styleUrl: './search-car.scss'
})
export class SearchCar {
  cars: Car[] = [];
  private baseUrl = baseUrl;
  constructor(private carSer: CarService){}

  getCars(): void {
    this.carSer.getCars().subscribe({
      next: (res) => {
        this.cars = res;
      },
      error: (err) => console.error('Error fetching cars', err),
    });
  }

 ngOnInit(): void {
  this.getCars();
 }

 getImageUrl(path: string | undefined): string{
  return(path ? `${this.baseUrl}${path}` : ``)
 }
}
