import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Md5} from "ts-md5/dist/md5";
import {CrscCookieService} from "../crsc-cookie.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userName: string;
    passWord: string;
    captcha: string;
    recordPasswordChecked = false;
    // recordAutomaticLoginChecked: boolean;
    baseCaptchaImgUrl = 'http://cattermu.top/CRSS/index.php/Login/verify';
    captchaImgUrl;

    rootUrl = 'http://cattermu.top/';

    constructor(private http: HttpClient,  public cookieService: CrscCookieService) {
        this.captchaImgUrl = this.baseCaptchaImgUrl;
    }

    ngOnInit() {
        let cookielist = this.cookieService.getLoginCookie("userInfo");
        //读取当前cookie，查看是选择了自动登录
        //读取当前cookie，查看是选择了记住密码
        let cookieItem = this.cookieService.isRecordPasswordChecked(cookielist);
        if(cookieItem!==null){
            this.recordPasswordChecked = cookieItem.recordPasswordChecked;
            this.userName = cookieItem.username;
            this.passWord = cookieItem.password;
        }
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

    changeCaptchaImg(){
        this.captchaImgUrl = this.getCaptcha(this.baseCaptchaImgUrl);
    }

    /**
    * 登陆函数
    */
    login(){
        //判断用户名，密码，验证码是否输入

        //判断是否需要记住密码
        if(this.recordPasswordChecked){
            this.cookieService.setLoginCookies(
                this.userName,
                this.passWord,
                this.recordPasswordChecked
            );
        }
        let passwdMd5 = Md5.hashStr(this.passWord);
        let loginUrl = '/CRSS/index.php/Login/checkLoginClient/type/1/name/'+this.userName+'/pwd/' + passwdMd5;
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
              //跳转至登陆页面
              if(data['status']==0){
                  console.log('go to login page');
              }
            },
            response => {
              console.log("POST call in error", response);
            }
        );
    }


}
