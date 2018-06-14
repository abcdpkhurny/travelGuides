import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class UpPhone extends Component {
    render() {
        return (
            <div>
                <form action="/personalList" id="loginForm">
                <div className="header-per">
                    <div className="headerTop">
                        <div className="headerla"> <Link to="/personalList"><i className="fa fa-angle-left fa-lg" aria-hidden="true"></i></Link></div>
                        <div className="headerTitle">更改号码</div>
                        <div className="headerLogin"></div>
                    </div>
                    <div className="small-cut-off"></div>
                </div>
                <div className="content-perList">
                    <div className="content-item">
                        新号： &nbsp;
                        <input type="text" value="18777777777"/>
                    </div>
                    <div className="big-cut-off"></div>
                    <div><input type="submit" value="保存" className="loginButton" id="loginButton"/></div>
                    
                </div>
                </form>
            </div>
        )
    }
}
