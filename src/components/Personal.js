import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Popover, NavBar, Icon } from 'antd-mobile';

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
export default class personal extends Component {

    // 头部插件样式

    state = {
        visible: true,
        selected: '',
      };
      onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
      };
      handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
      };

    render() {
        return (
            <div>
                <NavBar
            mode="light"
            rightContent={
            <Popover mask
                overlayClassName="fortest"
                overlayStyle={{ color: 'currentColor' }}
                // visible={this.state.visible} //进入界面弹框
                overlay={[
                (<Item key="4" value="scan"data-seed="logId"><Link to="/Login">登录</Link></Item>),
                (<Item key="5" value="special" style={{ whiteSpace: 'nowrap' }}><Link to="/Login">注册</Link></Item>),
                (<Item key="6" value="scan"data-seed="logId"><Link to="/personalList">个人信息</Link></Item>),
                ]}
                align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
                }}
                onVisibleChange={this.handleVisibleChange}
                onSelect={this.onSelect}
            >
                <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
                }}
                >
                <Icon type="ellipsis" />
                </div>
            </Popover>
            }
            >
                我的
        </NavBar>
            <div className="content-per">
                <Link to="/personalList">
                    <div className="contentTop">
                        <div className="contentImg"><img src="static/images/tourism/01.jpg"/></div>
                        <div className="contentUserName">
                            <div className="userName">Man哈哈哈 &nbsp;<span className="color-son"><i className="fa fa-venus" aria-hidden="true"></i></span> </div>
                            <div className="userNum"><span className="userNumW">0收藏</span><span>0发布</span></div>
                        </div>
                        <div className="content-rightimg"><i className="fa fa-angle-right fa-3x" aria-hidden="true"></i></div>
                    </div>
                </Link>
                {/* 没登录之前 */}
                {/* <Link to="/Login">
                    <div className="contentTop">
                       <div className="contentLogin"> 登录/注册</div>
                    </div>
                </Link> */}
                <div className="small-cut-off"></div>
                <div className="contentNumDer">
                    <div><p>收藏景点</p><p>0</p></div>
                    <div><p>发布景点</p><p>0</p></div>
                    <div><p>发布标题</p><p>0</p></div>
                    <a href=""><div className="clock">签到</div></a>
                </div>
                <div className="big-cut-off"></div>
                <Link to="/Collect">
                    <div className="myNews">
                        <div className="myTitle"><i class="fa fa-star-o fa-1x" aria-hidden="true"></i> 我的收藏</div>
                        <div className="content-rightimg"><i className="fa fa-angle-right fa-3x" aria-hidden="true"></i></div>
                    </div>
                </Link>
                <div className="big-cut-off"></div>
                <Link to="/establishScenery">
                    <div className="myNews">
                        <div className="myTitle"><i class="fa fa-pencil" aria-hidden="true"></i> 创建景点</div>
                        <div className="content-rightimg"><i className="fa fa-angle-right fa-3x" aria-hidden="true"></i></div>
                    </div>
                </Link>
                <div className="big-cut-off"></div>
                <Link to="/Collect">
                    <div className="myNews">
                        <div className="myTitle"><i class="fa fa-refresh" aria-hidden="true"></i> 审核标题</div>
                        <div className="content-rightimg"><i className="fa fa-angle-right fa-3x" aria-hidden="true"></i></div>
                    </div>
                </Link>
                <div className="big-cut-off"></div>
                <Link to="/Collect">
                    <div className="myNews">
                        <div className="myTitle"><i class="fa fa-refresh" aria-hidden="true"></i> 审核景点</div>
                        <div className="content-rightimg"><i className="fa fa-angle-right fa-3x" aria-hidden="true"></i></div>
                    </div>
                </Link>
                <div className="big-cut-off"></div>
            </div>
          </div>
        )
    }
}
