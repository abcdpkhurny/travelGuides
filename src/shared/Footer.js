import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import {withRouter} from 'react-router-dom';

const data=[
  {icon: (<i key="1" listto="/" className="iconfont"><span style={{fontSize:20}}>&#xe6b2;</span></i>),text: "推荐"},
  {icon: (<i key="2" listto="/findScenery" className="iconfont"><span style={{fontSize:20}}>&#xe690;</span></i>),text: "发现"},
  {icon: (<i key="3" listto="/community" className="iconfont"><span style={{fontSize:20}}>&#xe657;</span></i>),text: "社区"},
  {icon: (<i key="4" listto="/personal" className="iconfont"><span style={{fontSize:20}}>&#xe69c;</span></i>),text: "个人"}
]

class Footer extends Component {

  linttoPath=(e)=>{
    this.props.history.push(e.icon.props.listto)
  }
  
    render() {
      return (
        <div>
        <div className="footerBottom"></div>
        <div className="fixedBottom">
           <Grid data={data} square={false} columnNum={4} hasLine={false} activeStyle={false} 
           onClick={(e)=>this.linttoPath(e)}/> 
        </div>
        </div>
      );
    }
  }
  
  export default withRouter(Footer);

