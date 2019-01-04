import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UserDataService, AuthService } from '../framework';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  exp = [];
  userName: string;
  myForm: FormGroup;
  @ViewChild('dismiss') el: ElementRef;
  constructor(private authService: AuthService,
              private userDataService: UserDataService) { }

  ngOnInit() {

    this.userDataService.getUserJobHistory(localStorage.getItem('email')).subscribe((data) => {
      this.exp = data.past_jobs;
    });
    this.userDataService.getUserName(localStorage.getItem('email')).subscribe((data) => {
      this.userName = data.name;
    });

    this.myForm = new FormGroup({
      company_name: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      start_date: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      email_id: new FormControl(localStorage.getItem('email'))
    });

  }

  onSubmit() {

    this.userDataService.createNewJob(this.myForm.value)
      .subscribe((data) =>
      this.userDataService.getUserJobHistory(localStorage.getItem('email')).subscribe((dataAfterUpdate) => {
        this.exp = dataAfterUpdate.past_jobs;
        this.el.nativeElement.click();
      })
      );
      this.myForm.reset();
  }
}
