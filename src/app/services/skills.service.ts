import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private URL: string = '';

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8080/api';
  }

  getDataSkills(): Observable<any> {
    return this.http.get(`${this.URL}/skill`);
  }

  updateData(id: number, skill: Skill): Observable<any> {
    return this.http.put(`${this.URL}/skill/${id}`, JSON.stringify(skill), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteSkill(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/skill/${id}`);
  }

  addSkill(project: Skill): Observable<any> {
    return this.http.post(`${this.URL}/skill`, JSON.stringify(project), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
