import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Register extends Component {
    render() {
        return (
            <div className="content-log">
            <div className="content-login">
                <form action="#" method="post" id="loginForm">
                    <fieldset>
                        <p className="denglu">注册</p>
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
                        <div className="formFieldWrapper">
                            <label htmlFor="loginPasswordField"> 确认密码：</label>
                            <input type="password" value="" placeholder="请确认输入密码" id="loginPasswordFieldNew" className="loginPasswordField fieldWithIcon passwordFieldIcon" name="loginPasswordField"/>
                            <div className="small-cut-off"></div>
                        </div>
                        <div className="Login-err"> 已有此用户，请重新输入</div>
                        <div className="small-cut-off"></div>
                        <div><input type="submit" value="注册" className="loginButton" id="loginButton"/></div>
                        <div className="loginButtonsWrapper">
                            <Link to="/login" className="loginRegisterButton">登录</Link>
                            <a href="recover.html" className="loginRecoverButton">重置</a>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        
        )
    }
}
 