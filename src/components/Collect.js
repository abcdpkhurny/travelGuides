import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Collect extends Component {
    render() {
        return (
            <div className="collect">
                <div className="header-per">
                    <div className="headerTop">
                        <div className="headerla"> <Link to="/personal"><i className="fa fa-angle-left fa-lg" aria-hidden="true"></i></Link></div>
                        <div className="headerTitle">我的收藏</div>
                        <div className="headerLogin"></div>
                    </div>
                    <div className="big-cut-off"></div>
                </div>

                <div className="collect-content">
                    <a href="">
                        <div className="collect-fx">
                            <div className="collect-Img">
                                <img src="static/images/tourism/maerdaifu01.jpg" alt=""/>
                            </div>
                            <div className="collect-text">
                                <div className="collect-Name">马尔代夫</div>
                                <div className="collect-add"><span className="didian">地点</span><span><i className="fa fa-commenting" aria-hidden="true"></i>  评论</span></div>
                            </div>
                        </div>
                        <div className="big-cut-off"></div>
                    </a>
                    <a href="">
                        <div className="collect-fx">
                            <div className="collect-Img">
                                <img src="static/images/tourism/maerdaifu01.jpg" alt=""/>  
                            </div>
                            <div className="collect-text">
                                <div className="collect-Name">马尔代夫</div>
                                <div className="collect-add"><span className="didian">地点</span><span><i className="fa fa-commenting" aria-hidden="true"></i>  评论</span></div>
                            </div>
                        </div>
                        <div className="big-cut-off"></div>
                    </a><a href="">
                    <div className="collect-fx">
                        <div className="collect-Img">
                            <img src="static/images/tourism/maerdaifu01.jpg" alt=""/>
                        </div>
                        <div className="collect-text">
                            <div className="collect-Name">马尔代夫</div>
                            <div className="collect-add"><span className="didian">地点</span><span><i className="fa fa-commenting" aria-hidden="true"></i>  评论</span></div>
                        </div>
                    </div>
                    <div className="big-cut-off"></div>
                </a>
                </div>

           </div>
        )
    }
}
