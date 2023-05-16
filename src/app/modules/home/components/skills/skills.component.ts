import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  @Input() skills: {
    frontend: Array<any>;
    backend: Array<any>;
    otros: Array<any>;
  };

  constructor() {
    this.skills = { frontend: [], backend: [], otros: [] };
  }
}
