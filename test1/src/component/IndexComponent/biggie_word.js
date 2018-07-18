import React, {Component} from 'react';

class BiggieWord extends Component{
  constructor(...arg){
    super(...arg);
  }

  render(){
    return (
      <div className="biggie_word pad_inner">
        <h3>
          <span>今日言论</span>
        </h3>
        <div className="biggie_list">
          <ul>
            <li>
              <a href="#">
                <div className="biggie_photo" style={{"backgroundImage":"url(img/face1.jpg)"}}>
                </div>
                <div className="biggie_wrapper">
                  <div className="biggie_name">黄峥</div>
                  <p className="biggie_content">
                    阿里京东、滴滴美团，他们是帝国式竞争，有明确地盘的界限。但我觉得我们这一代人的思路不该是这样。
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="biggie_photo" style={{"backgroundImage":"url(img/face1.jpg)"}}>
                </div>
                <div className="biggie_wrapper">
                  <div className="biggie_name">黄峥</div>
                  <p className="biggie_content">
                    阿里京东、滴滴美团，他们是帝国式竞争，有明确地盘的界限。但我觉得我们这一代人的思路不该是这样。
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="biggie_photo" style={{"backgroundImage":"url(img/face1.jpg)"}}>
                </div>
                <div className="biggie_wrapper">
                  <div className="biggie_name">黄峥</div>
                  <p className="biggie_content">
                    阿里京东、滴滴美团，他们是帝国式竞争，有明确地盘的界限。但我觉得我们这一代人的思路不该是这样。
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BiggieWord
