import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class EstablishForum extends Component {

    render() {
        
        return (
            <div className="detailed">
            <form  action="/personal">
                <div className="header-per">
                    <div className="headerTop">
                        <div className="headerla "> <Link to="/personal"><i className="fa fa-angle-left fa-lg" aria-hidden="true"></i></Link></div>
                        <div className="headerTitle">创建论坛</div>
                        <div className="headerLogin"></div>
                    </div>
                    <div className="big-cut-off"></div>
                </div>
                <div className="detaContext">
                    <div className="dis-title">论坛标题</div>
                    <div className="shurukuang"><input type="text"/></div>
                </div>
            
                <div className="big-cut-off"></div>
                <div className="detaContext">
                    <div className="dis-title">论坛内容</div>
                    <div className="shurukuang"> <textarea className="text-fabiao"></textarea></div>
                </div>
                
                <div><input type="submit" value="发布" className="loginButton" id="loginButton"/></div>
                </form>
            </div>
        )
    }
}
