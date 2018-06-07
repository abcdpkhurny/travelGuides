import React, { Component } from 'react';
import Header from '../shared/Header'

class Community extends Component {
    render(){
        return(
            <div>
                <Header title="查找主题"/>
                <div className="community-list">
                    <h3>主题名称</h3>
                    <div>
                        <div>
                            <img src="static/images/1.jpg" alt="" />
                            <p>打打打</p>
                        </div>
                        <div>
                            <i key="1" className="iconfont">&#xe6a4;</i><span >256</span>
                        </div>
                    </div>
                </div>
                <div className="community-list">
                    <h3>主题名称</h3>
                    <div>
                        <div>
                            <img src="static/images/1.jpg" alt="" />
                            <p>打打打</p>
                        </div>
                        <div>
                            <i key="1" className="iconfont">&#xe6a4;</i><span >256</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Community;