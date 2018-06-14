import React, { Component } from 'react';
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import {Link} from 'react-router-dom';
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';

import { district, provinceLite } from 'antd-mobile-demo-data';
// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', paddingLeft: 15 }}
  >
    <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
    </div>
  </div>
);

const seasons = [
  [
    {
        label: '广东省',
        value: '广东省',
    },
  
  ],
  [
    {
        label: '广州',
        value: '广州',
    },
    {
        label: '珠海',
        value: '珠海',
    },
    {
        label: '深圳',
        value: '深圳',
    },
    {
        label: '佛山',
        value: '佛山',
    },

    {
        label: '清远',
        value: '清远',
    },
    {
        label: '茂名',
        value: '茂名',
    },
    {
        label: '中山',
        value: '中山',
    },
    {
        label: '江门',
        value: '江门',
    },
    {
        label: '湛江',
        value: '湛江',
    },
  ],
];
const data = [];
class establishScenery extends Component {

    // 地址插件
    state = {
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ['广东省', '广州'],
    visible: false,
  };
  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
    }, 120);
  };
        // 图片插件
        state = {
            files: data,
            multiple: false,
        }
        onChange = (files, type, index) => {
            console.log(files, type, index);
            this.setState({
            files,
            });
        }
        onSegChange = (e) => {
            const index = e.nativeEvent.selectedSegmentIndex;
            this.setState({
            multiple: index === 1,
            });
        }
    render() {
        const {getFieldProps} = this.props.form;
        const { files } = this.state;
        return (
            <div className="detailed">
            <form  action="/personal">
                <div className="header-per">
                    <div className="headerTop">
                        <div className="headerla "> <Link to="/personal"><i className="fa fa-angle-left fa-lg" aria-hidden="true"></i></Link></div>
                        <div className="headerTitle">创建景点</div>
                        <div className="headerLogin"></div>
                    </div>
                    <div className="big-cut-off"></div>
                </div>
                <div className="detaContext">
                    <div className="dis-title">景点名称</div>
                    <div className="shurukuang"><input type="text"/></div>
                </div>
                <div className="big-cut-off"></div>
                <div className="detaContext">
                    <div className="dis-title">景点地址</div>
                    <div className="dis-dizhi">
                    <WhiteSpace size="lg" />
                    <List style={{ backgroundColor: 'white' }} className="picker-list">
                        <Picker
                        data={seasons}
                        title="选择市区"
                        cascade={false}
                        extra="请选择(可选)"
                        value={this.state.sValue}
                        onChange={v => this.setState({ sValue: v })}
                        onOk={v => this.setState({ sValue: v })}
                        >
                        <List.Item arrow="horizontal">请选择景点地址</List.Item>
                        </Picker>
                    </List>
                    </div>
                </div>
                <div className="big-cut-off"></div>
                <div className="detaContext">
                    <div className="dis-title">景点简介</div>
                    <div className="shurukuang"> <textarea className="text-fabiao"></textarea></div>
                </div>
                <div className="big-cut-off"></div>
                <div className="detaContext">
                    <div className="dis-title">景点图片</div>
                    <WingBlank>
                        <SegmentedControl
                        values={['切换到单选', '切换到多选']}
                        selectedIndex={this.state.multiple ? 1 : 0}
                        onChange={this.onSegChange}
                        />
                        <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 5}
                        multiple={this.state.multiple}
                        />
                    </WingBlank>
                </div>
                <div className="big-cut-off"></div>
                <div><input type="submit" value="发布" className="loginButton" id="loginButton"/></div>
                <div className="big-cut-off"></div>
                </form>
            </div>
        )
    }
}
const EstablishScenery = createForm()(establishScenery);

export default EstablishScenery;