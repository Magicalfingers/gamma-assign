import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, AuthService} from '../framework';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email_id: new FormControl(null, [
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')
      ]),
      password: new FormControl(null, Validators.required)
    });
  }
  onSubmit() {


    this.authService.signInUser(this.myForm.value)
      .subscribe((data: User) => {
        localStorage.removeItem('email');
      localStorage.setItem('email', data.email_id);
      this.router.navigate(['exp-page']);
      }
      );
      this.myForm.reset();
  }

  openSignUp() {
    this.authService.loginSignupState.next(false);
  }
}
