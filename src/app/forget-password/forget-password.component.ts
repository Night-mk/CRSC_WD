import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  phoneNumber: string;
  passWord:string;
  MessageCode:string;
  disabled: boolean;
  tips = '获取验证码';
  constructor() { }

  ngOnInit() {
  }
  getCode (event: any ){
    let number = 60;
    this.disabled = true ;
    const that = this;
    that.tips = number +'s后重新获取';

    const timer =setInterval(function () {
      number --;
      if (number == 0){
        that.disabled = false;
        that.tips ='获取验证码';
        clearInterval(timer);
      }else{
        that.tips = number +'s后重新获取';
      }

    },1000);
  }
}
