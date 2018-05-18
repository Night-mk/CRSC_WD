import { Injectable } from '@angular/core';
import {Cookie} from "ng2-cookies/ng2-cookies";

@Injectable()

/**
 * 提供cookie服务
 */
export class CrscCookieService {

    constructor() { }

    /**
     * 获取当前cookie信息
     * cookie的库使用npm install ng2-cookies --save
     * cookie数据结构:
     * userInfo:"{username:"", password:"", recordPasswordChecked:boolean, *recordAutomaticLoginChecked:boolean*}"
     */
    getLoginCookie(cookiename){
        let cookielist = Cookie.get(cookiename);
        return cookielist;
    }

    /**
     * 设置cookie，全都写入userInfo
     * @param username
     * @param password
     * @param recordPasswordChecked
     */
    setLoginCookies(username, password, recordPasswordChecked){
        let cookieLogin = {
            "username": "",
            "password": "",
            "recordPasswordChecked": false
        };
        cookieLogin.username = username;
        cookieLogin.password = password;
        cookieLogin.recordPasswordChecked = recordPasswordChecked;
        Cookie.set("userInfo", JSON.stringify(cookieLogin), 10);
    }

    /**
     * 判断是否记住了密码
     * @param cookielist
     */
    isRecordPasswordChecked(cookielist){
        if(cookielist!=null){
            console.log(cookielist);
            let cookieitem = JSON.parse(cookielist);
            if(cookieitem.recordPasswordChecked==true){
                // this.recordPasswordChecked = cookieitem.recordPasswordChecked;
                // this.userName = cookieitem.username;
                // this.passWord = cookieitem.password;
                return cookieitem;
            }else{
                console.log("没有记住密码");
                return null;
            }
        }else{
            console.log("no login cookies");
            return null;
        }
    }
    /**
     * 判断是否自动登录
     * @param cooklist
     */
    // isRecordAutomaticLoginChecked(cookielist){
    //     if(cookielist!=[]){
    //         if(cookielist[0].recordAutomaticLoginChecked==true){
    //             this.recordAutomaticLoginChecked = cookielist[0].recordAutomaticLoginChecked;
    //             this.userName = cookielist[0].username;
    //             this.passWord = cookielist[0].password;
    //             return true;
    //         }else{
    //             console.log("没有自动登录");
    //             return false;
    //         }
    //     }
    // }
}
