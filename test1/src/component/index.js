import React, {Component} from 'react';
import Banner from './IndexComponent/banner';
import EditorRecommend from './IndexComponent/editor_recommend';
import ArticleList from './IndexComponent/article_list';
import RealTime from './IndexComponent/real_time';
import HotArticle from './IndexComponent/hot_article';
import BiggieWord from './IndexComponent/biggie_word';

class Index extends Component{
    constructor (...args) {
        super(...args);
    }

    render () {
        return (
            <div className="index_36kr">
        <div className="pagewrap">
          <div className="mainlib_flex_wapper">
            <div className="ab-index-exp mainlib">
              <div className="center_content">
                <div className="content-wrapper">
                <Banner></Banner>
                <EditorRecommend></EditorRecommend>
                <ArticleList></ArticleList>
                </div>
              </div>
            </div>
            <div className="rightlib cover_css">
              <div className="plan-image plan-lazyload-box">
              </div>
              <div className="index-right-second">
                <div className="plan-image plan-lazyload-box">
                </div>
              </div>
              <RealTime></RealTime>
              <div className="plan-image plan-lazyload-box"></div>
              <div className="plan-image plan-lazyload-box"></div>
              <HotArticle></HotArticle>
              <div className="plan-image plan-lazyload-box"></div>
              <BiggieWord></BiggieWord>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default Index;