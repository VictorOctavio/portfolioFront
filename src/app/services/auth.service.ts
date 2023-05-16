import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private session: boolean;
  uri: string = 'http://localhost:8000/auth';

  constructor(private http: HttpClient) {
    this.session = false;
  }

  signin(): Observable<any> {
    const body = {};
    return this.http.post(`${this.uri}/signin`, body);
  }

  signout(): Observable<any> {
    const body = {};
    return this.http.post(`${this.uri}/signout`, body);
  }

  isAuthorized() {
    return this.session;
  }
}
