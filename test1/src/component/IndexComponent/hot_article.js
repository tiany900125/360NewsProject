import React, {Component} from 'react';

class HotArticle extends Component{
  constructor(...arg){
    super(...arg);
  }

  render(){
    return (
      <div className="hot_article hot_posts pad_inner">
        <h3>
          <span>热门文章</span>
        </h3>
        <ul className="am-list">
          <li className="top">
            <div>
              <div className="img-cover">
                <a href="#">
                  <span className="">
                    <b>Top 1</b>
                  </span>
                  <div className="img-cell" style={{"backgroundImage":"url(img/top_img1.jpg)"}}></div>
                  <div className="article-title">
                    <div className="article-wrapper">标题标题标题标题</div>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="top">
            <div>
              <div className="img-cover">
                <a href="#">
                  <span className="top2">
                    <b>Top 2</b>
                  </span>
                  <div className="img-cell" style={{"backgroundImage":"url(img/top_img2.jpg)"}}></div>
                  <div className="article-title">
                    <div className="article-wrapper">
                      标题标题标题标题标题
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="top no-billing"></li>
          <li className="top">
            <div>
              <div>
                <div className="img-left-cover">
                  <a href="/p/5127646.html">
                    <span>3</span>
                    <div className="img-cell" style={{"backgroundImage":"url(img/top_img3.jpg)"}}></div>
                  </a>
                </div>
                <div className="right-article">
                  <h4>
                    <a href="#">
                      标题标题标题标题
                    </a>
                  </h4>
                  <div className="time_about" title="时间">
                    时间
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="top">
            <div>
              <div>
                <div className="img-left-cover">
                  <a href="/p/5127646.html">
                    <span>3</span>
                    <div className="img-cell" style={{"backgroundImage":"url(img/top_img3.jpg)"}}></div>
                  </a>
                </div>
                <div className="right-article">
                  <h4>
                    <a href="#">
                      标题标题标题标题
                    </a>
                  </h4>
                  <div className="time_about" title="时间">
                    时间
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="top">
            <div>
              <div>
                <div className="img-left-cover">
                  <a href="/p/5127646.html">
                    <span>3</span>
                    <div className="img-cell" style={{"backgroundImage":"url(img/top_img3.jpg)"}}></div>
                  </a>
                </div>
                <div className="right-article">
                  <h4>
                    <a href="#">
                      标题标题标题标题
                    </a>
                  </h4>
                  <div className="time_about" title="时间">
                    时间
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="top">
            <div>
              <div>
                <div className="img-left-cover">
                  <a href="/p/5127646.html">
                    <span>3</span>
                    <div className="img-cell" style={{"backgroundImage":"url(img/top_img3.jpg)"}}></div>
                  </a>
                </div>
                <div className="right-article">
                  <h4>
                    <a href="#">
                      标题标题标题标题
                    </a>
                  </h4>
                  <div className="time_about" title="时间">
                    时间
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="top">
            <div>
              <div>
                <div className="img-left-cover">
                  <a href="/p/5127646.html">
                    <span>3</span>
                    <div className="img-cell" style={{"backgroundImage":"url(img/top_img3.jpg)"}}></div>
                  </a>
                </div>
                <div className="right-article">
                  <h4>
                    <a href="#">
                      标题标题标题标题
                    </a>
                  </h4>
                  <div className="time_about" title="时间">
                    时间
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default HotArticle
