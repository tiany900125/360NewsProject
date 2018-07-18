import React, {Component} from 'react'

class Detail extends Component{
    constructor (...args) {
        super(...args);

        this.state = {
            article_data: null
        }
    }

    async componentDidMount () {
        let id = this.props.match.params.id;

        let data = await (await window.fetch(`http://loacalhost:8090/detail?id=${id}`)).json;

        this.setState({
            article_data: data
        });
    }

    render () {
        let data=this.state.article_data;
        data?(
            <div className="pagewrap pagewrap-full">
              <div className="article-detail">
                <div className="post-wrapper">
                  <div className="post-detail-con-box full-reading mainlib_flex_wapper">
                    <div className="mainlib">
                      <div className="center_content">
                        <div className="content-wrapper">
                          <div className="article-section">
                            <div className="mobile_article">
                              <h1>{data.title}</h1>
                              <div className="content-font">
                                <div className="am-cf author-panel">
                                  <div className="author am-fl">
                                    <a href={data.author_href} className="am-fl">
                                      <span className="name">{data.author_title}</span>
                                    </a>
                                    <span className="time am-fl">
                                      <span className="dot">&nbsp;•&nbsp;</span>
                                      <abbr className="time">{common.time2date(data.time)}</abbr>
                                    </span>
                                    <span className="time am-fl">
                                      <span className="dot">&nbsp;•&nbsp;</span>
                                      <abbr className="time">{data.tag}</abbr>
                                    </span>
                                  </div>
                                </div>
                                <section className="summary">{data.summary}</section>
                                <div>
                                  <section className="textblock" dangerouslySetInnerHTML={{
                                    __html: data.article['detailArticle|post'].content
                                  }}></section>
                                  <section className="article-footer-label">
                                    <div>
                                      <div>
                                        本文经授权发布，不代表36氪立场。如若转载请联系原作者。
                                      </div>
                                    </div>
                                  </section>
      
                                  <div className="article-footer-ad">
                                    <div className="plan-image plan-lazyload-box">
                                    </div>
                                  </div>
                                </div>
                                <section className="ad">
                                </section>
                                <section className="single-post-tags">
                                  <a className="kr-tag-gray" href="/tags/jinrong" target="_blank">标签1</a>
                                  <a className="kr-tag-gray" href="/tags/xiaofei" target="_blank">标签2</a>
                                </section>
                                <div className="fav-wrapper">
                                  <div className="common-post-like-wrapper">
                                    <a className="post-pc-like">
                                      <span className="icon-ic_like">
                                      </span>
                                      <span style={{"marginLeft":"4px"}}>赞</span>
                                    </a>
                                    <span className="count-box" style={{"display":"block"}}>
                                      <span className="count kr-animated">+1</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="share-nav">
                                  <div className="inner fixed" style={{"width":"720px"}}>
                                    <div className="box am-cf">
                                      <div className="share-author am-cf am-fl">
                                        <a href="/user/375349">
                                          <img className="avatar" src="/img/head_50.jpg" alt="" />
                                          <span className="name">名字</span>
                                        </a>
                                        <span className="kr-tag-arrow-blue kr-size-min">
                                          <span className="arrow">
                                            <em></em>
                                          </span>
                                          <span>资深作者</span>
                                        </span>
                                      </div>
                                      <div className="other-ctrl ctrl-box am-fr">
                                        <span className="icon-readmode pure-read cell">
                                          <div className="tip">
                                            <div className="inner-box">
                                              <span className="kr-arrow-down kr-arrow">
                                                <span></span>
                                              </span>
                                              <div>
                                                <p>“点击”尽享阅读沉浸模式,</p>
                                                <p>沉浸模式下点击右上角按钮返回</p>
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                        <span className="icon-back-top back cell"></span>
                                      </div>
                                      <div className="share-ctrl ctrl-box am-fr">
                                        <span className="icon-weixin wechat cell">
                                          <div className="tip">
                                            <div className="inner-box">
                                              <span className="kr-arrow-down kr-arrow">
                                                <span></span>
                                              </span>
                                              <div className="am-cf">
                                                <div className="img-box am-fl">
                                                  <img src="" />
                                                </div>
                                                <div className="txt">
                                                  <p>
                                                    打开微信"扫一扫",
                                                  </p>
                                                  <p>
                                                    打开网页后点击屏幕
                                                  </p>
                                                  <p>
                                                    右上角"分享"按钮
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                        <a className="icon-weibo weibo cell" target="_blank" href="">
                                        </a>
                                      </div>
                                      <div className="user-ctrl ctrl-box am-fr">
                                        <span className="icon-collect-min cell">
                                          <b className="count-min">0</b>
                                          <span className="count kr-animated ">+1</span>
                                        </span>
                                        <span className="icon-comment-min cell">
                                          <b className="count-min">0</b>
                                        </span>
                                      </div>
                                      <div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h5-author-info am-cf">
                                  <div className="img-box am-fl">
                                    <a href="/user/375349" target="_blank">
                                      <img src="/img/head_50.jpg" />
                                    </a>
                                  </div>
                                  <div className="info">
                                    <p className="name">
                                      <a href="/user/375349" target="_blank">名字</a>
                                      <span className="kr-tag-arrow-blue kr-size-min">
                                        <span className="arrow">
                                          <em></em>
                                        </span>
                                        <span>资深作者</span>
                                      </span>
                                    </p>
                                    <p className="intro">签名</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                            </div>
                            <div className="mobile_article">
                              <section className="single-post-comment">
                                <h4>
                                  <a name="comment" className="comment-list-title comment-title">
                                    参与讨论
                                  </a>
                                </h4>
                                <div className="input-module notlogin">
                                  <div className="textarea-wrapper">
                                    <textarea disabled="" placeholder="请登录后参与评论...">
                                    </textarea>
                                    <div className="user">
                                      <button type="button" disabled="" title="请登录后参与评论">
                                        <a href="#">
                                          提交评论
                                        </a>
                                      </button>
                                      <div className="current-user">
                                        <span className="img" style={{"background":"url(/img/f3a5016d8jzc4auz.png) center center / 80% no-repeat rgb(241, 241, 241)"}}>
                                        </span>
                                        <a href="#" className="name">
                                          登录
                                        </a>
                                        <span>
                                          后参与讨论
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="display-module">
                                </div>
                              </section>
                            </div>
                            <div className="related-articles-h5">
                              <h4>
                                相关文章
                              </h4>
                              <div className="list">
                                <div className="each-cell am-cf">
                                  <div className="img-box">
                                    <a href="/p/5126058.html?from=related" target="_blank" style={{"backgroundImage":"url(/img/t1.jpg)"}}>
                                    </a>
                                  </div>
                                  <div className="info">
                                    <p className="name">
                                      <a target="_blank" href="#">标题</a>
                                    </p>
                                    <p className="note">
                                      <span>文</span>
                                      <span>/</span>
                                      <a target="_blank" href="/user/375349">作者</a>
                                    </p>
                                  </div>
                                </div>
                                <div className="each-cell am-cf">
                                  <div className="img-box">
                                    <a href="/p/5126058.html?from=related" target="_blank" style={{"backgroundImage":"url(/img/t1.jpg)"}}>
                                    </a>
                                  </div>
                                  <div className="info">
                                    <p className="name">
                                      <a target="_blank" href="#">标题</a>
                                    </p>
                                    <p className="note">
                                      <span>文</span>
                                      <span>/</span>
                                      <a target="_blank" href="/user/375349">作者</a>
                                    </p>
                                  </div>
                                </div>
                                <div className="each-cell am-cf">
                                  <div className="img-box">
                                    <a href="/p/5126058.html?from=related" target="_blank" style={{"backgroundImage":"url(/img/t1.jpg)"}}>
                                    </a>
                                  </div>
                                  <div className="info">
                                    <p className="name">
                                      <a target="_blank" href="#">标题</a>
                                    </p>
                                    <p className="note">
                                      <span>文</span>
                                      <span>/</span>
                                      <a target="_blank" href="/user/375349">作者</a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="post-detail-plan-bottom">
                          <div className="plan-image plan-lazyload-box">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rightlib cover_css">
                      <div className="pad_inner">
                        <div className="author-info">
                          <div className="role-writer padding-wrapper right-author">
                            <div className="author-avatar">
                              <a href="/user/375349" target="_blank"
                              className="pointer" style={{"backgroundImage":"url(&quot","http":"//krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480&quot"}}>
                              </a>
                            </div>
                            <div className="author-info">
                              <a className="name pointer" href="/user/375349" target="_blank">名字</a>
                              <span className="kr-tag-arrow-blue kr-size-min">
                                <span className="arrow">
                                  <em></em>
                                </span>
                                <span>
                                  资深作者
                                </span>
                              </span>
                            </div>
                            <div className="author-desc">签名</div>
                            <div className="post-count">
                              <span className="icon-article">
                              </span>
                              <span>共发表 8464 篇</span>
                            </div>
                            <div className="post-list">
                              <h4>
                                最近内容
                              </h4>
                              <ul className="list">
                                <li>
                                  <p className="title">
                                    <a href="#" target="_blank">标题标题标题标题</a>
                                  </p>
                                  <p className="note am-cf">
                                    <span className="time am-fl">
                                      时间
                                    </span>
                                    <span className="tag am-fr">
                                      分类
                                    </span>
                                  </p>
                                </li>
                                <li>
                                  <p className="title">
                                    <a href="#" target="_blank">标题标题标题标题</a>
                                  </p>
                                  <p className="note am-cf">
                                    <span className="time am-fl">
                                      时间
                                    </span>
                                    <span className="tag am-fr">
                                      分类
                                    </span>
                                  </p>
                                </li>
                                <li>
                                  <p className="title">
                                    <a href="#" target="_blank">标题标题标题标题</a>
                                  </p>
                                  <p className="note am-cf">
                                    <span className="time am-fl">
                                      时间
                                    </span>
                                    <span className="tag am-fr">
                                      分类
                                    </span>
                                  </p>
                                </li>
                              </ul>
                            </div>
                            <section className="enter-report">
                              <a rel="nofollow" href="#" target="_blank">
                                阅读更多内容，狠戳这里
                              </a>
                            </section>
                          </div>
                        </div>
                        <div className="plan-image plan-lazyload-box"></div>
                        <div></div>
                        <div className="plan-image plan-lazyload-box"></div>
                        <div className="pin-wrapper" style={{"height":"309px"}}>
                          <div className="custom-pin-wrapper" style={{"width":"320px"}}>
                            <div>
                              <div className="guess-posts-list">
                                <h4>
                                  相关文章
                                </h4>
                                <ul>
                                  <li className="top">
                                    <a href="#" target="_blank" className="item">
                                      <span className="desc">标题标题标题标题标题标题</span>
                                    </a>
                                  </li>
                                  <li className="top">
                                    <a href="#" target="_blank" className="item">
                                      <span className="desc">标题标题标题标题标题标题</span>
                                    </a>
                                  </li>
                                  <li className="top">
                                    <a href="#" target="_blank" className="item">
                                      <span className="desc">标题标题标题标题标题标题</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="sponsor" style={{"display":"none"}}>
                              <h5>
                                <span>
                                  赞助商
                                </span>
                              </h5>
                              <ul className="am-list am-list-static">
                                <li>
                                </li>
                                <li>
                                </li>
                                <li>
                                </li>
                              </ul>
                            </div>
                            <div className="next-post-wrapper show">
                              <h4>
                                下一篇
                              </h4>
                              <div className="item">
                                <a href="#" className="title" target="_blank">标题标题标题标题标题</a>
                                <div className="tags-list">
                                  <i className="icon-tag">
                                  </i>
                                  <span>
                                    <a href="#" target="_blank">标签1</a>
                                    <span>，</span>
                                  </span>
                                  <span>
                                    <a href="#" target="_blank">标签2</a>
                                    <span>，</span>
                                  </span>
                                  <span>
                                    <a href="#" target="_blank">标签3</a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="share-nav-h5">
                <div className="inner">
                  <div className="box am-cf">
                    <div className="each-cell">
                      <span className="icon-collect cell">
                      </span>
                    </div>
                    <div className="each-cell">
                      <span className="icon-comments cell">
                      </span>
                    </div>
                    <div className="each-cell">
                      <a className="icon-weibo weibo cell" href="http://share.baidu.com/s?type=text&amp;searchPic=1&amp;sign=on&amp;to=tsina&amp;key=595885820&amp;url=http://36kr.com/p/5127978.html&amp;title=%E7%8B%AC%E8%A7%92%E5%85%BD%E5%BD%92%E6%9D%A5%EF%BC%9A%E6%9C%BA%E9%81%87%E5%92%8C%E9%A3%8E%E9%99%A9">
                      </a>
                    </div>
                    <div className="each-cell">
                      <span className="icon-back-top back cell">
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="article-detail" style={{"position":"relative"}}>
                <div></div>
                <div className="only-article">
                  <div className="center-content">
                    <div className="content-wrapper">
                      <div className="loading_article">
                        <div>
                          <div className="circle">
                            <i className="icon-loading">
                            </i>
                          </div>
                          <b>
                            加载中
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ):(
            <div>
              loading...
            </div>
          );
    }
}

export default Detail;