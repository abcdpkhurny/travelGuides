import React, { Component } from 'react';
import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import {Link} from 'react-router-dom';


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
export default class ForumList extends Component {
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
            <div className="forumList">
                <div className="header-per">
                    <div className="headerTop">
                        <div className="headerla"> <Link to="/Community"><i className="fa fa-angle-left fa-lg" aria-hidden="true"></i></Link></div>
                        <div className="headerTitle">综合讨论</div>
                        <div className="headerLogin"></div>
                    </div>
                    <div className="small-cut-off"></div>
                </div>
            <div className="for-header">
                <div>
                    <div className="for-title">论坛标题 论坛标题 论坛标题 论坛标题</div>
                    <div className="for-content">论坛简介 论坛简介 论坛简介 论坛简介 论坛简介 论坛简介 论坛简介 论坛简介 论坛简介论坛简介 论坛简介 论坛简介 论坛简介 论坛简介 论坛简介 论坛简介 论坛简介 论坛简介</div>
                </div>
                <div className="forum-biaoqian"><span> <i className="fa fa-thumbs-up" aria-hidden="true"></i> 555</span><span><i class="fa fa-star" aria-hidden="true"></i> 6666</span><span><i className="fa fa-commenting" aria-hidden="true"></i> 777</span></div>
                <div className="forum-wenzi"><span> 点赞</span><span> 收藏</span><span>评论</span></div>
            </div>
            <div className="for-plNum">5条评论</div>
            <div className="detaContext">
                <div className="dis-title">论坛评论</div>
                <div className="dis-context">
                    <div className="write-pinglun">
                        <div onClick={this.showModal('modal2')}><i className="fa fa-pencil" aria-hidden="true"></i> 写评论</div>
                        <div><i className="fa fa-commenting-o" aria-hidden="true"></i> 666</div>
                    </div>
                    <div className="pinglunQu">
                        <div className="renpinglun">
                            <div className="pinglunName"><img src="static/images/tourism/01.jpg"/> <span>啥子么？</span></div>
                            <div className="wenzhi">
                                <div className="pingluntext">世界上好看的人多了去了</div>
                                <div className="pinglunTime">今天12:14 <span onClick={this.showModal('modal2')} className="huifuanniu">回复</span></div>
                                <div className="pinglunhuifu">
                                    <div className="huifuRen">我是回复人</div>
                                    <div className="pingluntext">世界上好看的人多了去了</div>
                                    <div className="pinglunTime">今天12:14 <span onClick={this.showModal('modal2')} className="huifuanniu">回复</span></div>
                                </div>
                                <div className="pinglunhuifu">
                                    <div className="huifuRen">我是回复人</div>
                                    <div className="pingluntext">世界上好看的人多了去了</div>
                                    <div className="pinglunTime">今天12:14 <span onClick={this.showModal('modal2')} className="huifuanniu">回复</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="renpinglun">
                            <div className="pinglunName"><img src="static/images/tourism/01.jpg"/> <span>啥子么？</span></div>
                            <div className="wenzhi">
                                <div className="pingluntext">世界上好看的人多了去了</div>
                                <div className="pinglunTime">今天12:14 <span onClick={this.showModal('modal2')} className="huifuanniu">回复</span></div>
                                <div className="pinglunhuifu">
                                    <div className="huifuRen">我是回复人</div>
                                    <div className="pingluntext">世界上好看的人多了去了</div>
                                    <div className="pinglunTime">今天12:14 <span onClick={this.showModal('modal2')} className="huifuanniu">回复</span></div>
                                </div>
                                <div className="pinglunhuifu">
                                    <div className="huifuRen">我是回复人</div>
                                    <div className="pingluntext">世界上好看的人多了去了</div>
                                    <div className="pinglunTime">今天12:14 <span onClick={this.showModal('modal2')} className="huifuanniu">回复</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="renpinglun">
                            <div className="pinglunName"><img src="static/images/tourism/01.jpg"/>  <span>啥子么？</span></div>
                            <div className="wenzhi">
                                <div className="pingluntext">世界上好看的人多了去了</div>
                                <div className="pinglunTime">今天12:14 <span className="huifuanniu">回复</span></div>

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
