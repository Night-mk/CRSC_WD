import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Md5} from "ts-md5/dist/md5";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userName: string;
    passWord: string;
    captcha: string;
    recordPasswordChecked: boolean;
    recordAutomaticLoginChecked: boolean;
    baseCaptchaImgUrl = 'http://cattermu.top/CRSS/index.php/Login/verify';
    captchaImgUrl;

    rootUrl = 'http://cattermu.top/';

    constructor(private http: HttpClient) {
    this.captchaImgUrl = this.baseCaptchaImgUrl;
    }

    ngOnInit() {
    }

    /**
    * 获取验证码函数
    */
    getCaptcha(url) {
    // return this.http.get(url);
    let randomNum = Math.random();
    let wholeRUL = url + '?' + randomNum;
    return wholeRUL;
    }

    changeCaptchImg(){
    this.captchaImgUrl = this.getCaptcha(this.baseCaptchaImgUrl);
    }

    /**
    * 登陆
    */
    login(){
        //判断用户名，密码，验证码是否输入


        let passwdMd5 = Md5.hashStr(this.passWord);
        // let loginUrl = this.rootUrl + 'CRSS/index.php/Login/checkLoginClient/type/1/'+this.userName+'/pwd/' + passwdMd5;
        let loginUrl = '/CRSS/index.php/Login/checkLoginClient/type/1/name/'+this.userName+'/pwd/' + passwdMd5;
        console.log(loginUrl);
        //post登陆请求
        this.http.post(
            loginUrl,
            null,
            {
              responseType: 'json'
            }
        ).subscribe(
            (data)=> {
              console.log(data);
              if(data.status==0){
                  //跳转至登陆页面
                  console.log('go to login page');
              }
            },
            response => {
              console.log("POST call in error", response);
            }
        );
    }
}
