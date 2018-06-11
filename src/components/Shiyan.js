import React, { Component } from 'react';
import { Pagination, Icon } from 'antd-mobile';

const locale = {
  prevText: 'Prev',
  nextText: 'Next',
};

export default class Shiyan extends Component {
  
 
    render() {

        return (
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
        )
    }
}
