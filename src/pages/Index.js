import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Index extends Component {
  constructor(props){
		super(props)
		this.state={
      newScenics:[],
      likeScenics:[],
      recommendScenics:[],
      imgHeight: 176,
		}
	}
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
    this.loadScenics(this.props);
  }
  loadScenics=(props)=>{
    axios.get("/api/scenic/scenicByEndTime")
				.then(
					resp=>this.setState({
						newScenics:resp.data
					})
        )
    axios.get("/api/scenic/scenicByLove")
    .then(
      resp=>this.setState({
        likeScenics:resp.data
      })
    )
    axios.get("/api/scenic/scenicByBrowse")
    .then(
      resp=>this.setState({
        recommendScenics:resp.data
      })
    )
  }
  
  componentWillReceiveProps(newProps){
		
  }
  

    render() {
      return (
        <div>
        <Header title="查找景点" select="景点"/>
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
          {this.state.newScenics.map((val, index) => (
            <Link 
              to={"/detailed/"+val.id}
              key={index}
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={window.nginxUrl+"/images/"+val.path}
                alt={val.itle}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </Link>
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
          {this.state.likeScenics.map((val, index) => (
          <div className="scenic-recommend">
            <div>
              <h3>{val.title}</h3>
              <span>{val.endTime}</span>
            </div>
            <img src={window.nginxUrl+"/images/"+val.path} alt={val.title} />
            <div className="scenic-user">
              <img src={window.nginxUrl+"/user/"+val.path} alt="" />
              <p>哒哒哒哒</p>
              <span>{val.love}</span>
            </div>
          </div>
          ))}
        </div>
        <div className="scenic-list">
          <div className="scenic-list-title">
            <span className="index-title-square"></span>
            <span>猜你喜欢</span>
            <span>|</span>
            <span>LIKE</span>
          </div>
          {this.state.likeScenics.map((val, index) => (
          <div className="scenic-like">
            <img src={window.nginxUrl+"/images/"+val.path} alt={val.title}/>
            <div>
              <h3>{val.title}</h3>
              <div>
                <i key="1" className="iconfont"><span >&#xe6a3;</span></i>100万
                <i key="2" className="iconfont"><span >&#xe6a2;</span></i>1002
                <i key="3" className="iconfont"><span >&#xe6b0;</span></i>{val.love}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
      );
    }
  }
  
  export default Index;