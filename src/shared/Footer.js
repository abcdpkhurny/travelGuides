import React, { Component } from 'react';
import { Icon, Grid } from 'antd-mobile';
import {withRouter} from 'react-router-dom';

const list=[
  {id:"1",item:"check-circle", name:"推荐",to:"/"},
  {id:"2",item:"check", name:"发现",to:"/discover"},
  {id:"3",item:"check-circle-o", name:"社区",to:"/"},
  {id:"4",item:"cross-circle", name:"个人",to:"/"}
];

const data = list.map(data => ({
  icon: (<Icon listto={data.to} key={data.id} type={data.item} size="sm"/>),
  text: data.name,
}));

class Footer extends Component {

  linttoPath=(e)=>{
    this.props.history.push(e.icon.props.listto)
  }
  
    render() {
      return (
        <div className="fixedBottom">
           <Grid data={data} square={false} columnNum={4} hasLine={false} activeStyle={false} 
           onClick={(e)=>this.linttoPath(e)}/> 
        </div>
      );
    }
  }
  
  export default withRouter(Footer);

