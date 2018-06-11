import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { List, Radio, Flex, WhiteSpace } from 'antd-mobile';
const RadioItem = Radio.RadioItem;

export default class UpSex extends Component {
    state = {
        value: 0,
        value2: 0,
      };
      onChange = (value) => {
        console.log('checkbox');
        this.setState({
          value,
        });
      };
   

    render() {
        const { value, value2} = this.state;
        const data = [
            { value: 0, label: '男' },
            { value: 1, label: '女' },
        ];
    
    return (

      <div>
        <form action="/personalList" id="loginForm">
        <div className="header-per">
          <div className="headerTop">
              <div className="headerla"> <Link to="/personalList"><i className="fa fa-angle-left fa-lg" aria-hidden="true"></i></Link></div>
              <div className="headerTitle">更改性别</div>
              <div className="headerLogin"></div>
          </div>
          <div className="small-cut-off"></div>
        </div>
        <div  className="content-age">
          <List>
            {data.map(i => (
              <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
          <WhiteSpace size="lg" /> 
        
                  <div><input type="submit" value="保存" className="loginButton" id="loginButton"/></div>   
        </div>
        </form>
      </div>
      );
    }
  }
      
