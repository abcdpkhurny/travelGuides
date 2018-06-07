import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import Header from '../shared/Header'

class Index extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
    }
    render() {
      return (
        <div>
        <Header title="查找景点"/>
        <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          dots
          beforeChange={(from, to) => {}}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val}
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={"static/images/"+(index+1)+".jpg"}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
        <div className="scenic-list">
          <div className="scenic-list-title">
            <span className="index-title-square"></span>
            <span>推荐</span>
            <span>|</span>
            <span>RECOMMEND</span>
          </div>
          <div className="scenic-recommend">
            <div>
              <h3>旅游景点</h3>
              <span>2012.1.1</span>
            </div>
            <img src="static/images/1.jpg" alt=""/>
            <div className="scenic-user">
              <img src="static/images/1.jpg" alt="" />
              <p>哒哒哒哒</p>
              <span>2020</span>
            </div>
          </div>
        </div>
        <div className="scenic-list">
          <div className="scenic-list-title">
            <span className="index-title-square"></span>
            <span>猜你喜欢</span>
            <span>|</span>
            <span>LIKE</span>
          </div>
          <div className="scenic-like">
            <img src="static/images/1.jpg" alt=""/>
            <div>
              <h3>旅游标题旅游标题旅游标题旅游标题旅游标题旅游标题..............</h3>
              <div>
                <i key="1" className="iconfont"><span >&#xe6a3;</span></i>100万
                <i key="2" className="iconfont"><span >&#xe6a2;</span></i>1002
                <i key="3" className="iconfont"><span >&#xe6b0;</span></i>1000
              </div>
            </div>
          </div>
          <div className="scenic-like">
            <img src="static/images/1.jpg" alt=""/>
            <div>
              <h3>旅游标题..............</h3>
              <div>
                <i key="1" className="iconfont"><span >&#xe6a3;</span></i>100万
                <i key="2" className="iconfont"><span >&#xe6a2;</span></i>1002
                <i key="3" className="iconfont"><span >&#xe6b0;</span></i>1000
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }
  
  export default Index;