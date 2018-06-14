import React, { Component } from 'react';
import Header from '../shared/Header'

import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import { Pagination, Icon } from 'antd-mobile';

const locale = {
  prevText: 'Prev',
  nextText: 'Next',
};
const data = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];

class Community extends Component {

     
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }
  onChange = (value) => {
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

    render(){
        const { initData, show } = this.state;
      const menuEl = (
        <Menu
          className="single-foo-menu"
          data={initData}
          value={['1']}
          level={1}
          onChange={this.onChange}
          height={document.documentElement.clientHeight * 0.6}
        />
      );
      const loadingEl = (
        <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </div>
      );
        return(
                <div className="forumLunT">
                <Header title="查找主题"/>
        
                <div className={show ? 'single-menu-active' : ''}>
                    <div>
                        <NavBar
                        leftContent="全部"
                        mode="light"
                        onLeftClick={this.handleClick}
                        className="single-top-nav-bar"
                        >
                        OneLevel menu
                        </NavBar>
                    </div>
                    {show ? initData ? menuEl : loadingEl : null}
                    {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
                </div>
                <div className="forum-content">
                    <div className="forum-fx">
                        <div className="forum-Name"><img src="static/images/tourism/01.jpg"/> <span className="Username">啥子么    f ？</span><span className="UserTime">7天前更新</span></div>
                        <div className="forum-neirong">
                            <div className="forum-title"><a href="/ForumList"> 论坛标题 论坛标题 论坛标题 论坛标题</a></div>
                            <div className="forum-biaoqian"><span> <i className="fa fa-thumbs-up" aria-hidden="true"></i> 5555</span><span><i class="fa fa-star" aria-hidden="true"></i> 6666</span><span><i className="fa fa-commenting" aria-hidden="true"></i> 777</span></div>
                        </div>
                    </div>
                    <div className="forum-fx">
                        <div className="forum-Name"><img src="static/images/tourism/01.jpg"/> <span className="Username">啥子 dddd么？</span><span className="UserTime">7天前更新</span></div>
                        <div className="forum-neirong">
                            <div className="forum-title"><a href=""> 论论坛标题坛标题 论坛标题 论坛标题 论坛标题</a></div>
                            <div className="forum-biaoqian"><span> <i className="fa fa-thumbs-up" aria-hidden="true"></i> 5555</span><span><i class="fa fa-star" aria-hidden="true"></i> 6666</span><span><i className="fa fa-commenting" aria-hidden="true"></i> 777</span></div>
                        </div>
                    </div>
                    <div className="forum-fx">
                        <div className="forum-Name"><img src="static/images/tourism/01.jpg"/> <span className="Username">啥子 dddd么？</span><span className="UserTime">7天前更新</span></div>
                        <div className="forum-neirong">
                            <div className="forum-title"><a href=""> 论论坛标题坛标题 论坛标题 论坛标题 论坛标题</a></div>
                            <div className="forum-biaoqian"><span> <i className="fa fa-thumbs-up" aria-hidden="true"></i> 5555</span><span><i class="fa fa-star" aria-hidden="true"></i> 6666</span><span><i className="fa fa-commenting" aria-hidden="true"></i> 777</span></div>
                        </div>
                    </div>
               </div>
               <div className="big-cut-off"></div>
               <div className="pagination-container" >
                <Pagination total={5}
                    className="custom-pagination-with-icon"
                    current={1}
                    locale={{
                    prevText: (<span className="arrow-align"><Icon type="left" />上一页</span>),
                    nextText: (<span className="arrow-align">下一页<Icon type="right" /></span>),
                    }}
                />
              </div>
              <div className="big-cut-off"></div>
            </div>
        )
    }
}

export default Community;