import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../env/env';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  private baseUrl = `${baseUrl}/api/bid`;
  constructor(private http: HttpClient) {}

  // Place a new bid
  placeBid(dto: {auctionId: number, price: number}): Observable<any> {
    return this.http.post(`${this.baseUrl}/place`, dto);
  }

  // Get bids for the current logged-in user (from token)
  getMyBids(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/my-bids`);
  }

  getTopBidders(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/top-bidders`);
}

}
