import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import common from '../../common';

class ArticleListItem extends Component{
  constructor(...arg){
    super(...arg);
  }

  render(){
    const data = this.props.article_data;
    console.log(data);
    return (
      <li>
        <div className="am-cf inner_li inner_li_abtest">
          <span className="undefined mark h5_mark">{data.tag}</span>
          <Link to={`/detail/${data.id}/`}>
            <div className="img_box list-img-loaded">
              <div>
                <img alt="{data.title}" className="load-img fade" src={`http://localhost:8090/img?src=${data.src}`} />
              </div>
              <span className=" undefined mark pc_mark">{data.tag}</span>
            </div>
            <div className="intro">
              <h3>{data.title}</h3>
              <div className="abstract">{data.summary}</div>
            </div>
          </Link>
          <div className="info">
            <div className="info-list info-list-abtest">
              <div className="user-info">
                <a href={data.author.href} className="name">{data.author.title}</a>
                <span className="oblique_line">·</span>
              </div>
              <div className="time-div">
                <span className="time" title={common.time2date(data.time*1000)}>{common.time2date(data.time*1000)}</span>
                <span className="time h5_time">{common.time2date(data.time*1000)}</span>
              </div>
            </div>
            <div className="tags-list">
              <i className="icon-tag"></i>
              {data.catalogs.map((catalog, index)=>
                index!=data.catalogs.length-1?
                (
                  <span key={catalog.href}>
                    <a href={catalog.href}>{catalog.name}</a>
                    <span>，</span>
                  </span>
                ):
                (
                  <span key={catalog.href}>
                    <a href={catalog.href}>{catalog.name}</a>
                  </span>
                )
              )}
            </div>
            <div className="comments-list">
              <span className="comments"></span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

class ArticleList extends Component{
  constructor(...arg){
    super(...arg);

    this.state={
      articles: [],
      now_page: 0
    }
  }

  async componentDidMount(){
    await this.getPage();
  }

  async getPage(page=0){
    console.log(page);
    let articles=await (await window.fetch(`http://localhost:8090/list?page=${page}`)).json();

    let new_articles=this.state.articles.concat(articles);
    
    this.setState({
      articles: new_articles,
      now_page: page
    });
    
  }

  async fnClick(){
    await this.getPage(this.state.now_page+1);
  }

  render(){
    return (
      <div className="list_con">
        <div className="kr_tab">
          <div className="kr_tab_box">
            <div className="kr_tab_wapper" style={{"width":"auto"}}>
              <div className="new-channel-tab-bg">
              </div>
              <div className="new-channel-tab new-channel-tab-hover">
                <div className="tab-pop-up-pc">
                  <span className="img">
                  </span>
                  <span className="arrow">
                  </span>
                  <span className="text">
                    频道即将换新 敬请期待!
                  </span>
                </div>
              </div>
              <ul className="am-cf stealth-scroll-bar">
                <li className="kr_active">
                  <h2 className="seo_h2">
                    <span>最新文章</span>
                  </h2>
                </li>
                <li className="">
                  <span>大公司</span>
                </li>
                <li className="">
                  <span>消费</span>
                </li>
                <li className="">
                  <span>娱乐</span>
                </li>
                <li className="">
                  <span>前沿技术</span>
                </li>
                <li className="">
                  <span>汽车交通</span>
                </li>
                <li className="">
                  <span>区块链</span>
                </li>
                <li className="">
                  <span>技能Get</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <div>
              <div className="kr_article_list">
                <div>
                  <ul className="feed_ul">
                    {this.state.articles.map(item=><ArticleListItem article_data={item} key={item.id}></ArticleListItem>)}
                  </ul>
                </div>
              </div>
              <div className="loading_more" onClick={this.fnClick.bind(this)}>
                浏览更多
                <span className="icon-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleList
