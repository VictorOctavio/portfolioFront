import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private URL: string = '';

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8080/api';
  }

  getDataUser(): Observable<any> {
    return this.http.get(`${this.URL}/user`);
  }

  updateData(id: number, user: User): Observable<any> {
    return this.http.put(`${this.URL}/user/${id}`, JSON.stringify(user), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
