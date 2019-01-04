import { Component, OnInit } from '@angular/core';
import { AuthService} from './framework';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  loginSignUp = false;
  constructor(private auth: AuthService) {

  }

  ngOnInit() {
  this.auth.loginSignupState.subscribe(data => {
      this.loginSignUp = data;
  });
  }
}
