import { Component, OnInit } from '@angular/core';

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
  
  onEnroll() {
    alert(`Thank you for enrolling to ` + this.title + `course.`)
  }
}
