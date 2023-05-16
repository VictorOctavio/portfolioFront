import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    description: '',
  };
  private aboutService;

  constructor(aboutService: AboutService) {
    this.aboutService = aboutService;
  }

  ngOnInit(): void {
    this.aboutService.getDataUser().subscribe((user) => {
      this.user = user[0];
    });
  }

  updateData(): void {
    this.aboutService.updateData(this.user.id, this.user).subscribe((u) => {
      this.user = u;
    });
  }
}
