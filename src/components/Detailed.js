import React, { Component } from 'react';
import { Modal, List, Button, WhiteSpace } from 'antd-mobile';
import axios from 'axios';
import queryString from 'query-string';

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }
export default class Detailed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal2: false,
        };
      }
      showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
      }
      onClose = key => () => {
        this.setState({
          [key]: false,
        });
      }
      loadScenic=(props)=>{
        if(props.location.search){
			// let query=queryString.parse(props.location.search);
			// axios.get("/api/"+query.id)
			// 	.then(
			// 		resp=>this.setState({
						
			// 		})
			// 	)
		}
      }
    
      onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
      }
    render() {
        return (
            <div className="detailed">
            <div className="detaTopImg">
                <img alt=""src="/static/images/tourism/maerdaifu01.jpg"/>
                <div className="detaImgText">
                    <p>景点名称</p>
                    <div><span className="deta-Eye"><i className="fa fa-eye" aria-hidden="true"></i> 999+</span></div>
                </div>
            </div>
            <div className="detaContext">
                <div className="dis-title">景点简介</div>
                <div className="dis-context">
                    专门为你定制的旅游目的地 专门为你定制的旅游目的地
                    专门为你定制的旅游目的地 专门为你定制的旅游目的地
                    专门为你定制的旅游目的地 专门为你定制的旅游目的地
                </div>
            </div>
            <div className="small-cut-off"></div>
            <div className="detaContext">
                <div className="dis-title">景点地址</div>
                <div className="dis-context">
                    马尔代夫共和国-马尔代夫地处南亚
                </div>
            </div>
            <div className="small-cut-off"></div>
            <div className="detaContext">
                <div className="dis-title">景点攻略</div>
                <div className="dis-context">
                   
                    专门为你定制的旅游目的地 专门为你定制的旅游目的地
                </div>
            </div>
            <div className="small-cut-off"></div>
    
            <div className="detaContext">
                <div className="dis-title">景点评价</div>
                <div className="dis-context">
                    <div className="write-pinglun">
                        <div onClick={this.showModal('modal2')}><i className="fa fa-pencil" aria-hidden="true"></i> 写评论</div>
                        <div><i className="fa fa-commenting-o" aria-hidden="true"></i> 666</div>
                    </div>
                    <div className="pinglunQu">
                        <div className="renpinglun">
                            <div className="pinglunName"><img alt=""src="static/images/tourism/01.jpg"/> <span>啥子么？</span></div>
                            <div className="wenzhi">
                                <div className="pingluntext">世界上好看的人多了去了</div>
                                <div className="pinglunTime">今天12:14 <span onClick={this.showModal('modal2')} className="huifuanniu">回复</span></div>
                                <div className="pinglunhuifu">
                                    <div className="huifuRen">我是回复人</div>
                                    <div className="pingluntext">世界上好看的人多了去了世界上好看的人多了去了世界上好看的人多了去了</div>
                                    <div className="pinglunTime">今天12:14 <span onClick={this.showModal('modal2')} className="huifuanniu">回复</span></div>
                                </div>
                                <div className="pinglunhuifu">
                                    <div className="huifuRen">我是回复人</div>
                                    <div className="pingluntext">世界上好看的人多了去了</div>
                                    <div className="pinglunTime">今天12:14 <span onClick={this.showModal('modal2')}  className="huifuanniu">回复</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="renpinglun">
                            <div className="pinglunName"><img alt=""src="static/images/tourism/01.jpg"/> <span>天真</span></div>
                            <div className="wenzhi">
                                <div className="pingluntext">你说什么就是什么囖</div>
                                <div className="pinglunTime">今天12:14 <span onClick={this.showModal('modal2')} className="huifuanniu">回复</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 评价、回复弹出框 */}
            <WhiteSpace />
            <Modal
            popup
            visible={this.state.modal2}
            onClose={this.onClose('modal2')}
            animationType="slide-up"
            >
            <List renderHeader={() => <div>编写评价</div>} className="popup-list">
              <div className="small-cut-off"></div>
                <div>
                    <textarea className="text-fabiao"></textarea>
                </div>
                <List.Item>
                <Button type="primary" onClick={this.onClose('modal2')}>发表</Button>
                </List.Item>
            </List>
            </Modal>
        </div>
        )
    }
}
