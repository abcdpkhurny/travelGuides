import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import {Link} from 'react-router-dom';
import { Pagination, Icon } from 'antd-mobile';

const locale = {
  prevText: 'Prev',
  nextText: 'Next',
};
export default class FindScenery extends Component {
    renderContent = tab =>
    (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
              <div className="discover">

                <div className="dis-summary">
                    <div className="dis-title">精选</div>
                    <div className="dis-context">
                        专门为你定制的旅游目的地 专门为你定制的旅游目的地
                        专门为你定制的旅游目的地 专门为你定制的旅游目的地
                        专门为你定制的旅游目的地 专门为你定制的旅游目的地
                    </div>
                </div>
                <div className="small-cut-off"></div>
            <div className="dis-Img">
                
                <dl>
                    <dt><Link to="/Detailed"><img src="static/images/tourism/maerdaifu02.jpg"/> </Link></dt>
                    <dd className="xd-top">景点名称</dd>
                    <dd className="xd-top">景点简介</dd>
                    <dd className="xd-bott">更多精品 点击查看</dd>
                </dl>
               
                <dl>
                    <dt><Link to="/Detailed"><img src="static/images/tourism/maerdaifu01.jpg"/> </Link></dt>
                    <dd className="xd-top">红砖厂创意园</dd>
                    <dd className="xd-top">创意、艺术的新领域</dd>
                    <dd className="xd-bott">更多精品 点击查看</dd>
                </dl>
                <dl>
                    <dt><Link to="/Detailed"><img src="static/images/tourism/maerdaifu02.jpg"/> </Link></dt>
                    <dd className="xd-top">景点名称</dd>
                    <dd className="xd-top">景点简介</dd>
                    <dd className="xd-bott">更多精品 点击查看</dd>
                </dl>
               
                <dl>
                    <dt><Link to="/Detailed"><img src="static/images/tourism/maerdaifu01.jpg"/> </Link></dt>
                    <dd className="xd-top">红砖厂创意园</dd>
                    <dd className="xd-top">创意、艺术的新领域</dd>
                    <dd className="xd-bott">更多精品 点击查看</dd>
                </dl>
                <dl>
                    <dt><Link to="/Detailed"><img src="static/images/tourism/maerdaifu02.jpg"/> </Link></dt>
                    <dd className="xd-top">景点名称</dd>
                    <dd className="xd-top">景点简介</dd>
                    <dd className="xd-bott">更多精品 点击查看</dd>
                </dl>
               
                <dl>
                    <dt><Link to="/Detailed"><img src="static/images/tourism/maerdaifu01.jpg"/> </Link></dt>
                    <dd className="xd-top">红砖厂创意园</dd>
                    <dd className="xd-top">创意、艺术的新领域</dd>
                    <dd className="xd-bott">更多精品 点击查看</dd>
                </dl>
                <dl>
                    <dt><Link to="/Detailed"><img src="static/images/tourism/maerdaifu02.jpg"/> </Link></dt>
                    <dd className="xd-top">景点名称</dd>
                    <dd className="xd-top">景点简介</dd>
                    <dd className="xd-bott">更多精品 点击查看</dd>
                </dl>
               
                <dl>
                    <dt><Link to="/Detailed"><img src="static/images/tourism/maerdaifu01.jpg"/> </Link></dt>
                    <dd className="xd-top">红砖厂创意园</dd>
                    <dd className="xd-top">创意、艺术的新领域</dd>
                    <dd className="xd-bott">更多精品 点击查看</dd>
                </dl>
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
        </div>
    </div>
    );

    render() {const tabs = [
        { title: '广州' },
        { title: '珠海' },
        { title: '深圳' },
        { title: '佛山' },
        { title: '清远' },
        { title: '茂名' },
        { title: '中山' },
        { title: '江门' },
        { title: '湛江' },
        ];
        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                {this.renderContent}
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}
