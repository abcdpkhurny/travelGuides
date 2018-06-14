import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
    };
  }

    onChange= (value) => {
      this.setState({ value });
      //console.log(value);
    };

    searchScenic=(e)=>{
      //console.log(e)
      if(this.props.select==="主题"){
        this.props.history.push("/")
      }else{
        this.props.history.push("/")
      }
      this.setState({
        value: ''
      })
    }

    render() {
      return (
        <div>
            <SearchBar
                value={this.state.value}
                placeholder={this.props.title}
                onSubmit={this.searchScenic}
                onCancel={this.searchScenic}
                onChange={(e) => this.onChange(e)}
                cancelText='查询'
                maxLength={20}
            />
        </div>
      );
    }
  }
  
  export default withRouter(Header);

