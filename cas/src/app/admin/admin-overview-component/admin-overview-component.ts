import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car-service';
import { Car } from '../../models/car';
import { CommonModule } from '@angular/common';
import { baseUrl } from '../../env/env';

@Component({
  selector: 'app-admin-overview-component',
  imports: [CommonModule],
  templateUrl: './admin-overview-component.html',
  styleUrl: './admin-overview-component.scss'
})
export class AdminOverviewComponent implements OnInit{
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
