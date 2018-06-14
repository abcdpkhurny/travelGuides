import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { NavBar, Icon } from 'antd-mobile';

export default class Login extends Component {
    // 点击登录事件
    login=()=>{
        const username=this.refs.username.value;
        const password=this.refs.password.value;
        axios.post("地址",{"username":username,"password":password}).then(
            res=>{
                window.localStorage.setItem
            },
        );
    }

    render() {
        return (
        <div className="content-log">
                <div className="header-per">
                    <div className="headerTop">
                        <div className="headerla"> <Link to="/personal"><i className="fa fa-angle-left fa-lg" aria-hidden="true"></i></Link></div>
                        <div className="headerTitle">修改信息</div>
                        <div className="headerLogin"></div>
                    </div>
                    <div className="small-cut-off"></div>
                </div>
            <div className="content-login">
                <form action="/findScenery" id="loginForm">
                    <fieldset>
                        <p className="denglu">登录</p>
                        <div className="formFieldWrapper">
                            <label htmlFor="loginNameField">用户名：</label>
                            <input type="text" ref="username" placeholder="请输入用户名" id="loginNameField" className="loginNameField fieldWithIcon userFieldIcon" name="loginNameField" />
                            <div className="small-cut-off"></div>
                        </div>
                        <div className="formFieldWrapper">
                            <label htmlFor="loginPasswordField"> 密  &nbsp;码：</label>
                            <input type="password" ref="password" placeholder="请输入密码" id="loginPasswordField" className="loginPasswordField fieldWithIcon passwordFieldIcon" name="loginPasswordField"/>
                            <div className="small-cut-off"></div>
                        </div>
                        <div className="Login-err"> 你输入的用户或密码错误</div>
                        <div className="small-cut-off"></div>
                        <div><input type="submit" onClick={this.doLogin} value="登录" className="loginButton" id="loginButton"/></div>
                        <div className="loginButtonsWrapper">
                            <Link to="/register" className="loginRegisterButton">注册</Link>
                            <Link to="/Login" className="loginRecoverButton">重置</Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        )
    }
}
