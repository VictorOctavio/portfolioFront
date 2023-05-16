import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = [];

  project: Project = {
    id: 0,
    name: '',
    description: '',
    imageURL: '',
    url: '',
    tecnologies: '',
    fecha: new Date(),
  };

  private projectService;

  constructor(projectService: ProjectsService) {
    this.projectService = projectService;
  }

  ngOnInit(): void {
    this.projectService.getDataProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  addProject(): void {
    this.projectService.addProject(this.project).subscribe((data) => {
      this.projects.unshift(data);
    });
  }

  deleteProject(id: any): void {
    this.projectService.deleteProject(id).subscribe((data) => {
      this.projects = this.projects.filter((p) => p.id !== id);
    });
  }

  handleRight(): void {}

  handleLeft(): void {}
}
