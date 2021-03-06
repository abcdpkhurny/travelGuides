import React, { Component } from 'react';
import { Accordion, List } from 'antd-mobile';
import Header from '../shared/Header'
class Discover extends Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
      return (
        <div>
          <Header title="查找景点"/>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="Title 1">
            <List className="my-list">
              <List.Item>content 1</List.Item>
              <List.Item>content 2</List.Item>
              <List.Item>content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="Title 3" className="pad">
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
      </div>
      </div>
      );
    }
  }
  
  export default Discover;

  