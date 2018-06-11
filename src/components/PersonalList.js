import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class PersonalList extends Component {
    render() {
        return (
            <div>
                <div className="header-per">
                    <div className="headerTop">
                        <div className="headerla"> <Link to="/personal"><i className="fa fa-angle-left fa-lg" aria-hidden="true"></i></Link></div>
                        <div className="headerTitle">修改信息</div>
                        <div className="headerLogin"></div>
                    </div>
                    <div className="small-cut-off"></div>
                </div>
                <div className="content-perInfo">

                    <div className="myNews">
                        <div className="myTitle">头像<span><img src="static/images/tourism/01.jpg"/></span></div>
                        <div className="content-rightimg"><i className="fa fa-angle-right fa-3x" aria-hidden="true"></i></div>
                    </div>
                <div className="small-cut-off"></div>
                <Link to="/UpUserName">
                    <div className="myNews">
                        <div className="myTitle">昵称<span>hehehheh</span></div>
                        <div className="content-rightimg"><i className="fa fa-angle-right fa-3x" aria-hidden="true"></i></div>
                    </div>
                </Link>
                <div className="small-cut-off"></div>
                <Link to="/UpPhone">
                    <div className="myNews">
                        <div className="myTitle">手机号<span>12345678910</span></div>
                        <div className="content-rightimg"><i className="fa fa-angle-right fa-3x" aria-hidden="true"></i></div>
                    </div>
                </Link>
                <div className="small-cut-off"></div>
                <Link to="/upSex">
                    <div className="myNews">
                        <div className="myTitle">性别<span>女</span></div>
                        <div className="content-rightimg"><i className="fa fa-angle-right fa-3x" aria-hidden="true"></i></div>
                    </div>
                </Link>
                <div className="small-cut-off"></div>
            </div>
        </div>
        )
    }
}
