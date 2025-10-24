import { Injectable } from '@angular/core';
import { baseUrl } from '../env/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auction } from '../models/auction';

@Injectable({
  providedIn: 'root'
})
export class CarAuctionService {
    private baseUrl = `${baseUrl}/api/auction`;
    constructor(private http: HttpClient) {}

    startAuction(id: number): Observable<any>{
      return  this.http.put(`${this.baseUrl}/${id}/start`, {});
    }

  getAll(): Observable<Auction[]> {
  return this.http.get<Auction[]>(this.baseUrl);
}

endAuction(id: number){
   return  this.http.put(`${this.baseUrl}/${id}/end`, {});
}
}


