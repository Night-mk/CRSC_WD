import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import {CrscCookieService} from "./crsc-cookie.service";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangePasswordComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
      NgZorroAntdModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [CrscCookieService]
})
export class AppModule { }
