import React, { Component } from 'react';
import { Tabs, WhiteSpace,Pagination, Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../shared/Header';

export default class FindScenery extends Component {
    constructor(props){
		super(props)
		this.state={
            scenics:[],
            citytabs:[],
            tab:[],
            page:1,
            total:5,
        }
        
    }
    componentDidMount(){
        this.loadCity();
    }

    loadCity=()=>{
        axios.get("/api/city/list").then(resp=>this.loadCityTabs(resp.data))
        this.loadTab(this.tab)
    }

    loadCityTabs=(item)=>{
        let tab=[{key:0,title:"全部"}];
        item.map(val=>tab.push({key:val.id,title:val.name}))
        this.setState({
            citytabs:tab
        })
    }
    
    loadTab=(e)=>{
        let id=e?e.key:0;
        axios.get("/api/city/"+id).then(resp=>this.setState({tab:resp.data}))
        axios.get("/api/scenic/scenicByCityId?id="+id)
        .then(resp=>
                this.setState({
                    scenics:resp.data.sceniclist
                }))
    }
    
    pageChange=(val)=>{
        let id=this.state.tab?this.state.tab.id:0;
        console.log(id);
        if(this.state.total>this.state.page){
            this.setState({
                page:this.state.page+val
            })
        }
        
    }
    
    renderContent = tab =>
    (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
              <div className="discover">
                <div className={this.state.tab.length===0?"hide":"dis-summary"}>
                    <div className="dis-title">精选</div>
                    <div className="dis-context">
                        {this.state.tab.content}
                    </div>
                </div>
                <div className="small-cut-off"></div>
            <div className="dis-Img">
                {this.state.scenics.map(val=>(
                    <dl>
                        <dt><Link to={"/detailed/"+val.id}><img src={window.nginxUrl+"/images/"+val.path} alt={val.name}/> </Link></dt>
                        <dd className="xd-top">{val.name}</dd>
                        <dd className="xd-top">{val.name}</dd>
                        <dd className="xd-bott">{val.title}</dd>
                    </dl>  
                ))}
            </div>
            <div className="big-cut-off"></div>
            <div className="pagination-container" >
            
            <Pagination total={this.state.total}
                className="custom-pagination-with-icon"
                current={this.state.page}
                locale={{
                prevText: (<span className="arrow-align" onClick={()=>this.pageChange(-1)}><Icon type="left" />上一页</span>),
                nextText: (<span className="arrow-align" onClick={()=>this.pageChange(1)}>下一页<Icon type="right" /></span>),
                }}
            />
            </div>
        </div>
    </div>
    );
    
    
    render() {
        return (
            <div>
                <Header title="查找景点" select="景点" />
                <WhiteSpace />
                <Tabs 
                tabs={this.state.citytabs} 
                onTabClick={this.loadTab}
                renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                    {this.renderContent}
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}
