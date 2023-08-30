import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})

export class AngularComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  title: string = 'Angulr';

  OnEnroll() {
    const enrollService =new EnrollService;
    enrollService.OnEnrollClicked(this.title)
  }

}
