import React, { Component } from 'react';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class theme extends Component {
    componentDidMount() {
        this.autoFocusInst.focus();
    }

    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div>
                <List renderHeader={() => '创建主题'}>
                <TextareaItem
                    {...getFieldProps('title', {
                    initialValue: '',
                    })}
                    title="标题"
                    placeholder="请输入主题名称"
                    data-seed="logId"
                    ref={el => this.autoFocusInst = el}
                    autoHeight
                />
                </List>
                <List renderHeader={() => '内容'}>
                <TextareaItem
                    {...getFieldProps('count', {
                    initialValue: '',
                    })}
                    placeholder="请输入你的内容"
                    rows={7}
                    count={0}
                />
                </List>
            </div>
        )
    }
}

const Theme = createForm()(theme);

export default Theme;