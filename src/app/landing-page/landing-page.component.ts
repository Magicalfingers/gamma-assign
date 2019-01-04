import { Component, OnInit } from '@angular/core';
import { AuthService } from '../framework';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit  {
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
