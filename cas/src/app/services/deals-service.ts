import { Injectable } from '@angular/core';
import { Deal } from '../models/deal';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealsService {
  private deals: Deal[] = [
    { no: 1, ownerName: 'Emma', 
      creationDate: '2025-01-10',
      carType: 'SUV',
      returnDate: '2025-02-01',
      paymentType: 'Credit Card', 
      imgUrl: "assets/img/img-1.jpg",
      carUrl: "assets/img/car-12.png",
      totalPrice: 25000 
      },
    { no: 2, ownerName: 'Sarah', creationDate: '2025-01-12', carType: 'Sedan', returnDate: '2025-02-03', paymentType: 'EFT',  imgUrl: "assets/img/img-2.jpg",  carUrl: "assets/img/car-1.png", totalPrice: 30000 },
    { no: 3, ownerName: 'Michael', creationDate: '2025-01-15', carType: 'Coupe', returnDate: '2025-02-07', paymentType: 'Cash',  imgUrl: "assets/img/img-3.jpg",  carUrl: "assets/img/car-2.png", totalPrice: 20000 },
    { no: 4, ownerName: 'Alice', creationDate: '2025-01-18', carType: 'Truck', returnDate: '2025-02-10', paymentType: 'Credit Card',  imgUrl: "assets/img/img-4.jpg",  carUrl: "assets/img/car-3.png", totalPrice: 40000 },
    { no: 5, ownerName: 'Danny', creationDate: '2025-01-20', carType: 'Hatchback', returnDate: '2025-02-12', paymentType: 'EFT',  imgUrl: "assets/img/img-5.jpg",  carUrl: "assets/img/car-4.png", totalPrice: 18000 },
    { no: 6, ownerName: 'Thobani', creationDate: '2025-01-22', carType: 'Convertible', returnDate: '2025-02-14', paymentType: 'Cash',  imgUrl: "assets/img/img-6.jpg", carUrl: "assets/img/car-5.png", totalPrice: 35000 },
    { no: 7, ownerName: 'James', creationDate: '2025-01-25', carType: 'SUV', returnDate: '2025-02-18', paymentType: 'Credit Card',  imgUrl: "assets/img/img-7.jpg",  carUrl: "assets/img/car-6.png", totalPrice: 27000 },
    { no: 8, ownerName: 'Olivia', creationDate: '2025-01-28', carType: 'Sedan', returnDate: '2025-02-21', paymentType: 'EFT',  imgUrl: "assets/img/img-8.jpg",  carUrl: "assets/img/car-7.png", totalPrice: 32000 },
    { no: 9, ownerName: 'Caroline', creationDate: '2025-01-30', carType: 'Coupe', returnDate: '2025-02-24', paymentType: 'Cash',  imgUrl: "assets/img/img-9.jpg",  carUrl: "assets/img/car-8.png", totalPrice: 23000 },
    { no: 10, ownerName: 'Sizwe', creationDate: '2025-02-02', carType: 'Truck', returnDate: '2025-02-26', paymentType: 'Credit Card',  imgUrl: "assets/img/img-10.jpg",  carUrl: "assets/img/car-9.png", totalPrice: 45000 },
    { no: 11, ownerName: 'Lihle', creationDate: '2025-02-05', carType: 'Hatchback', returnDate: '2025-03-01', paymentType: 'EFT',  imgUrl: "assets/img/img-11.jpg",  carUrl: "assets/img/car-10.png", totalPrice: 19000 },
    { no: 12, ownerName: 'Mia', creationDate: '2025-02-08', carType: 'Convertible', returnDate: '2025-03-05', paymentType: 'Cash',  imgUrl: "assets/img/img-12.jpg",  carUrl: "assets/img/car-11.png", totalPrice: 37000 },
  ];

  getDeals(): Observable<Deal[]> {
    return of(this.deals);
  }
}
