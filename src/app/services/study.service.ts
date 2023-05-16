import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';
import { Study } from '../models/Study';

@Injectable({
  providedIn: 'root',
})
export class StudyService {
  private URL: string = '';

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8080/api';
  }

  getDataStudies(): Observable<any> {
    return this.http.get(`${this.URL}/study`);
  }

  updateData(id: number, study: Skill): Observable<any> {
    return this.http.put(`${this.URL}/study/${id}`, JSON.stringify(study), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteStudy(id: any): Observable<any> {
    return this.http.delete(`${this.URL}/study/${id}`);
  }

  addStudy(study: Study): Observable<any> {
    return this.http.post(`${this.URL}/study`, JSON.stringify(study), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
