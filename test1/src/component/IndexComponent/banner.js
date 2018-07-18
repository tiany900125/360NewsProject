import React, {Component} from 'react';

class Banner extends Component{
  constructor(...arg){
    super(...arg);
  }

  render(){
    return (
      <div className="high_projects">
        <div className="a_ds_banner_wapper">
          <div className="space_padding"></div>
          <div className="a_ds_banner index_banner slick-initialized slick-slider" style={{"opacity":"1"}}>
            <button type="button" className="icon-angle-left slick-arrow" style={{"display":"inline-block"}}></button>
            <div className="slick-list draggable">
              <div className="slick-track" style={{"opacity":"1"}}>
                <div className="banner_cell radius has_title slick-slide" style={{"width":"747px"}}>
                  <a href="#" style={{"backgroundImage":"url(img/banner1.jpg)"}}></a>
                  <div className="info">
                    <div className="abstract">
                      巨头决战3公里生活圈：它会是2018零售业的主战场吗？
                    </div>
                  </div>
                </div>
                <div className="banner_cell radius has_title slick-slide" style={{"width":"747px"}}>
                  <a href="#" style={{"backgroundImage":"url(img/banner2.jpg)"}}></a>
                  <div className="mark_box">
                    <span className="mark">
                      广告
                    </span>
                  </div>
                  <div className="info">
                    <div className="abstract">
                      每一克轻皆匠心，李宁超轻15，轻驰而来
                    </div>
                  </div>
                </div>
                <div className="banner_cell radius has_title slick-slide" style={{"width":"747px"}}>
                  <a href="#" style={{"backgroundImage":"url(img/banner3.jpg)"}}></a>
                  <div className="info">
                    <div className="abstract">
                      趣头条，在巨头曾经忽视的下沉市场狂奔
                    </div>
                  </div>
                </div>
                <div className="banner_cell radius has_title slick-slide" style={{"width":"747px"}}>
                  <a href="#" style={{"backgroundImage":"url(img/banner4.jpg)"}}></a>
                  <div className="info">
                    <div className="abstract">
                      中国独角兽报告：周期短、创新强、爆发集中，为什么这么牛？
                    </div>
                  </div>
                </div>
                <div className="banner_cell radius has_title slick-slide" style={{"width":"747px"}}>
                  <a href="#" style={{"backgroundImage":"url(img/banner5.jpg)"}}></a>
                  <div className="info">
                    <div className="abstract">
                      今日值得看——36氪全天热度文章
                    </div>
                  </div>
                </div>
                <div className="banner_cell radius has_title slick-slide slick-current slick-active"
                style={{"width":"747px"}}>
                  <a href="#" style={{"backgroundImage":"url(img/banner6.jpg)"}}></a>
                  <div className="info">
                    <div className="abstract">
                      无人驾驶、免费乘坐，硅谷的出租车行业要变天了
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="icon-angle-right slick-arrow" style={{"display":"inline-block"}}></button>
            <ul className="slick-dots" style={{"display":"flex"}}>
              <li className="">
                <button type="button">
                  1
                </button>
              </li>
              <li className="">
                <button type="button">
                  2
                </button>
              </li>
              <li className="">
                <button type="button">
                  3
                </button>
              </li>
              <li className="">
                <button type="button">
                  4
                </button>
              </li>
              <li className="">
                <button type="button">
                  5
                </button>
              </li>
              <li className="slick-active">
                <button type="button">
                  6
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner
