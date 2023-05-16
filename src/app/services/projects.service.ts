import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private URL: string = '';

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8080/api';
  }

  getDataProjects(): Observable<any> {
    return this.http.get(`${this.URL}/project`);
  }

  updateData(id: number, project: Project): Observable<any> {
    return this.http.put(`${this.URL}/project/${id}`, JSON.stringify(project), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/project/${id}`);
  }

  addProject(project: Project): Observable<any> {
    return this.http.post(`${this.URL}/project`, JSON.stringify(project), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
