import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService, UserDataService} from './framework';
import {HttpClientModule} from '@angular/common/http';
import { ExpComponent } from './exp/exp.component';
// import { ModalModule } from 'ng2-bootstrap';
import {
  SharedModule as PrimeSharedModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ExpComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    PrimeSharedModule,
    AppRoutingModule
    // ModalModule
  ],
  providers: [AuthService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
