import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, AuthService} from '../framework';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email_id: new FormControl(null, [
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')
      ]),
      password: new FormControl(null, Validators.required)
    });
  }
  onSubmit() {

    this.authService.signUpUser(this.myForm.value)
      .subscribe((data: User) =>
      this.authService.loginSignupState.next(true)
      );

  }

  openLogin() {
    this.authService.loginSignupState.next(true);
  }
}

