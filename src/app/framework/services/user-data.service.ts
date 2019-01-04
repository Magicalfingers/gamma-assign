import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models';

@Injectable()
export class UserDataService {

  constructor(private http: HttpClient) {
  }

  getUserName(userEmail): Observable<any> {
    return this.http.get('http://35.200.250.5:5000/user?email_id=' + userEmail);
  }

  getUserJobHistory(userEmail): Observable<any> {
    return this.http.get('http://35.200.250.5:5000/user_job_history?email_id=' + userEmail);
  }

  createNewJob(userExp): Observable<any> {
    return this.http.post('http://35.200.250.5:5000/user_job_history', userExp);
  }
}
