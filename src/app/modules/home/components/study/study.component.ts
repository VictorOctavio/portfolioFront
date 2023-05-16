import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/models/Study';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css'],
})
export class StudyComponent implements OnInit {
  studies: Array<Study> = [];
  private studyService: StudyService;
  study: Study = {
    description: '',
    finishDate: '',
    initDate: '',
    imageURL: '',
    title: '',
    url: '',
    id: 0,
  };

  constructor(studyService: StudyService) {
    this.studyService = studyService;
  }

  ngOnInit(): void {
    this.studyService.getDataStudies().subscribe((data) => {
      this.studies = data;
    });
  }

  addStudy(): void {
    this.studyService.addStudy(this.study).subscribe((data) => {
      this.studies.unshift(data);
    });
  }

  removeStudy(id: any): void {
    alert(id);
    this.studyService.deleteStudy(id).subscribe();
    this.studies = this.studies.filter((s) => s.id != id);
  }
}
