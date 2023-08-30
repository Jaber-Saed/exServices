import { Component } from '@angular/core';
import { EnrollService } from './Services/enroll.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [EnrollService]
})
export class AppComponent {
  title = 'exServices';
  constructor(private enrollService: EnrollService) {

  }
}
