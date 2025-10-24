import { Injectable } from '@angular/core';
import { baseUrl } from '../env/env';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    private baseUrl = `${baseUrl}/api/user`;
    constructor(private http: HttpClient) {}

     register(formData: FormData): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, formData);
  }
}
