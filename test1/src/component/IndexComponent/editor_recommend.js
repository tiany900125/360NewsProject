import React, {Component} from 'react';

class EditorRecommend extends Component{
  constructor(...arg){
    super(...arg);
  }

  render(){
    return (
      <div className="editor_recommend_box">
        <div className="editor_recommend">
          <ul className="am-cf pc_list">
            <li className="radius">
              <div className="space_cell"></div>
              <div>
                <a href="#">
                  <img src="img/heading2.jpg" alt="标题" />
                </a>
                <div className="des am-text-break">
                  <a href="#">
                    <span>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</span>
                  </a>
                </div>
              </div>
            </li>
            <li className="radius">
              <div className="space_cell"></div>
              <div>
                <a href="#">
                  <img src="img/heading2.jpg" alt="标题" />
                </a>
                <div className="des am-text-break">
                  <a href="#">
                    <span>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</span>
                  </a>
                </div>
              </div>
            </li>
            <li className="radius">
              <div className="space_cell"></div>
              <div>
                <a href="#">
                  <img src="img/heading2.jpg" alt="标题" />
                </a>
                <div className="des am-text-break">
                  <a href="#">
                    <span>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className="am-cf h5_list slick-initialized slick-slider">
            <button type="button" className="slick-prev slick-arrow" style={{"display":"block"}}>Previous</button>
            <div className="slick-list draggable">
              <div className="slick-track" style={{"opacity":"1"}}>
                <div className="cell slick-slide slick-current slick-active"
                style={{"width":"0px"}}>
                  <a href="#">
                    <img src="img/heading1_sm.jpg" alt="标题" />
                    <span>标题标题标题标题标题标题标题标题</span>
                  </a>
                </div>
                <div className="cell slick-slide" style={{"width":"0px"}}>
                  <a href="#">
                    <img src="img/heading2_sm.jpg" alt="标题" />
                    <span>标题标题标题标题标题标题标题标题</span>
                  </a>
                </div>
                <div className="cell slick-slide" style={{"width":"0px"}}>
                  <a href="#">
                    <img src="img/heading3_sm.jpg" alt="标题" />
                    <span>标题标题标题标题标题标题标题标题</span>
                  </a>
                </div>
              </div>
            </div>
            <button type="button" className="slick-next slick-arrow" style={{"display":"block"}}>Next</button>
            <ul className="slick-dots" style={{"display":"block"}}>
              <li className="slick-active">
                <button type="button">1</button>
              </li>
              <li className="">
                <button type="button">2</button>
              </li>
              <li className="">
                <button type="button">3</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default EditorRecommend
