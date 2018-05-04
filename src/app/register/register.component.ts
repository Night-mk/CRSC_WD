import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    userName: string;
    passWord: string;
    phoneNumber: string;
    email: string;
    sex: string;
    school: string;
    collage: string;
    major: string;
    role: string;

    constructor() {}

    ngOnInit() {
    }

}
