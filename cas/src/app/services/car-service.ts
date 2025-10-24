import { Injectable } from '@angular/core';
import { baseUrl } from '../env/env';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { Auction } from '../models/auction';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = `${baseUrl}/api/car`;
  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl);
  }

  approveAuction(id: number): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}/approve`, { approve: true });
}

 scheduleAuction(dto: { carId: number; startDate: string; endDate: string }) {
  return this.http.post(`${this.baseUrl}/${dto.carId}/schedule-auction`, dto);
}

addCar(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, formData);
  }

}
