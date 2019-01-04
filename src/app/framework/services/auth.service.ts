import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models';


@Injectable()
export class AuthService {
  loginSignupState = new BehaviorSubject(false);
  constructor(private http: HttpClient) {
  }

  signUpUser(userData): Observable<any> {
    return this.http.post('http://35.200.250.5:5000/sign_up', userData);
  }

  signInUser(userData): Observable<any> {
    return this.http.post('http://35.200.250.5:5000/login', userData);
  }

}
