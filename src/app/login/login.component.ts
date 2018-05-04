import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  passWord: string;
  captcha: string;
  captchaImgUrl;

  constructor(private http: HttpClient) {
    // this.captchaImgUrl = 'http://cattermu.top/CRSS/index.php/Login/verify';
  }

  ngOnInit() {
    // 初始化时请求验证码
    console.log('test');
    this.getCaptcha('/CRSS/index.php/Login/verify').subscribe((data) => {
      // this.captchaImgUrl = data;
      console.log (JSON.stringify(data));
      console.log (this.captchaImgUrl);
    });
  }

  /**
   * 获取验证码函数
   */
  getCaptcha(url) {
    return this.http.get(url);
  }
}
