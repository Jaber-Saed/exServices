import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';;;;

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  // providers: [EnrollService]
})

export class AngularComponent implements OnInit {
  constructor(private enrollService: EnrollService) {

  }

  ngOnInit(): void { }

  title: string = 'Angulr';

  OnEnroll() {
    this.enrollService.OnEnrollClicked(this.title)
  }

}
