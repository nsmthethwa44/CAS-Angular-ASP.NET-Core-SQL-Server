import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../env/env';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
   private baseUrl = `${baseUrl}/api/owner`;
    constructor(private http: HttpClient) {}

    getMyCars(): Observable<Car[]>{
      return this.http.get<Car[]>(`${this.baseUrl}/my-cars`)
    }

    getBidsOnMyCar(){
      return this.http.get<any[]>(`${this.baseUrl}/bids-on-my-cars`)
    }

    getMyAuctions(){
      return this.http.get<any[]>(`${this.baseUrl}/my-auctions`)
    }
}
