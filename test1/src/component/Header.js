import React, {Component} from 'react'

class Header extends Component{

    constructor (...args) {
        super(...args);
    }

    render () {
        return (
            <header className="common-header J_commonHeaderWrapper">
            <div className="app-container J_appDownloadWrapper">
              <a href="#" className="open-app-button">
                立即打开
              </a>
            </div>
            <div className="container">
              <div className="pc-nav">
                <a className="logo" href="#">
                  <img src="/img/logo-a6afc.png" alt="36氪" />
                </a>
                <div className="triggers">
                  <a className="headericon-header-search J_searchTrigger" href="javascript:void(0);"></a>
                  <a className="headericon-header-menu J_menuTrigger" href="javascript:void(0);"></a>
                </div>
                <nav>
                  <ul className="J_navList">
                    <li name="mainindex">
                      <a href="#">首页</a>
                    </li>
                    <li name="index" className="active">
                      <a href="#">首页</a>
                    </li>
                    <li name="kaike" className="kaike">
                      <a href="#">开氪</a>
                    </li>
                    <li name="newsflashes">
                      <a href="#">
                        7×24h 快讯
                      </a>
                    </li>
                    <li className="mobile-show">
                      <a href="#">
                        近期活动
                      </a>
                    </li>
                    <li className="mobile-show">
                      <a href="#">
                        鲸准
                      </a>
                    </li>
                    <li className="mobile-show">
                      <a href="#">
                        氪空间
                      </a>
                    </li>
                    <li className="firstlevel li-chuang pop-row-trigger">
                      <a href="javascript:void(0)" className="trigger-hide">
                        创业者服务
                        <i className="headericon-arrow-drop-down">
                        </i>
                      </a>
                    </li>
                    <li className="firstlevel li-tou pop-row-trigger">
                      <a href="javascript:void(0)" className="trigger-hide">
                        投资人服务
                        <i className="headericon-arrow-drop-down"></i>
                      </a>
                    </li>
                    <li className="discover pop-row-trigger">
                      <a href="javascript:void(0)" className="trigger-hide pointer-box">
                        联系我们
                        <i className="headericon-arrow-drop-down"></i>
                      </a>
                    </li>
                    <li className="mobile-show"></li>
                  </ul>
                </nav>
              </div>
              <div className="search-mask blackhidden">
              </div>
              <div className="right-col J_rightNavWrapper">
                <ul className="sub-nav">
                  <li className="report-btn mobile-hide">
                    <a href="#">
                      寻求报道
                    </a>
                  </li>
                  <li className="search-item">
                    <div className="search-form-wrapper" href="javascript:void(0)">
                      <div className="search-form-inner">
                        <i className="headericon-Icon_Search searchdisplayico">
                        </i>
                        <div className="search-form-box">
                          <i className=" headericon-Icon_Search blackhidden searchico">
                          </i>
                          <form action="" className="J_searchForm">
                            <input type="text" placeholder="搜索" className="J_searchInput" />
                          </form>
                        </div>
                        <i className="close-search headericon-close"></i>
                        <button className="do-submit">
                          搜索
                        </button>
                        <button className="do-submit do-submit-icon headericon-header-search">
                        </button>
                        <button className="headericon-close close-icon" type="button">
                        </button>
                      </div>
                      <span>
                      </span>
                    </div>
                  </li>
                  <li className="app-download pop-row-trigger">
                    <a href="#">
                      <i className="headericon-Icon_App">
                        <span className="path1">
                        </span>
                        <span className="path2">
                        </span>
                        <span className="path3">
                        </span>
                      </i>
                      <span className="txt">
                        客户端
                      </span>
                    </a>
                  </li>
                  <li className="login-actions">
                    <div className="login">
                      <div className="group">
                        <i className="headericon-Icon_SignIn blackhidden">
                        </i>
                        <i className="headericon-header-user whitehidden">
                        </i>
                        <a href="javascript:void(0)" className="J_login login-link">
                          登录
                        </a>
                      </div>
                      <b className="whitehidden">
                        /
                      </b>
                      <div className="group">
                        <i className="headericon-Icon_SignUp blackhidden">
                          <span className="path1">
                          </span>
                          <span className="path2">
                          </span>
                          <span className="path3">
                          </span>
                        </i>
                        <a href="javascript:void(0)" className="J_signup login-link">
                          注册
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="startup-service-pop pop-up-row mobile-hide">
              <div className="items-wrapper" style={{"transform":"translate(0px, -100%)"}}>
                <a href="#" className="item">
                  <span className="product-icon">
                    <img src="/img/ic_report@2x-bc294.png" />
                  </span>
                  <span className="product-name">
                    寻求报道
                  </span>
                  <span className="product-desc">
                    最贴心的服务，最优质的报道
                  </span>
                </a>
                <a href="#" className="item">
                  <span className="product-icon">
                    <img src="/img/ic_activity@2x-966df.png" />
                  </span>
                  <span className="product-name">
                    近期活动
                  </span>
                  <span className="product-desc">
                    提供最有价值的创投活动
                  </span>
                </a>
                <a href="#" className="item">
                  <span className="product-icon">
                    <img src="/img/jingzhun-logo-1-614ef.png" />
                  </span>
                  <span className="product-name">
                    鲸准
                  </span>
                  <span className="product-desc">
                    让每一次选择都心中有数
                  </span>
                </a>
                <a href="#" className="item">
                  <span className="product-icon">
                    <img src="/img/gn8pet9cnj7jc1vw.png" />
                  </span>
                  <span className="product-name">
                    氪空间
                  </span>
                  <span className="product-desc">
                    让办公更简单
                  </span>
                </a>
              </div>
            </div>
            <div className="investor-service-pop pop-up-row mobile-hide">
              <div className="items-wrapper" style={{"transform":"translate(0px, -100%)"}}>
                <a href="#" className="item">
                  <span className="product-icon">
                    <img src="/img/ic_cooperation@2x-4c322.png" />
                  </span>
                  <span className="product-name">
                    VClub投资机构合作
                  </span>
                  <span className="product-desc">
                    助力投资机构领跑新商业时代
                  </span>
                </a>
                <a href="#" className="item">
                  <span className="product-icon">
                    <img src="/img/jingzhun-logo-2-3ef0e.png" />
                  </span>
                  <span className="product-name">
                    鲸准 · 个人版
                  </span>
                  <span className="product-desc">
                    投资人的随身数据字典
                  </span>
                </a>
                <a href="#" className="item">
                  <span className="product-icon">
                    <img src="/img/jingzhun-logo-3-20458.png" />
                  </span>
                  <span className="product-name">
                    鲸准 · 机构版
                  </span>
                  <span className="product-desc">
                    投资机构的全流程管理系统
                  </span>
                </a>
              </div>
            </div>
            <div className="contact-us-pop pop-up-row mobile-hide">
              <div className="items-wrapper" style={{"transform":"translate(0px, -100%)"}}>
                <a href="javascript:void(0)" className="item">
                  <span className="product-icon">
                    <img src="/img/ic_submission@2x-8d888.png" />
                  </span>
                  <span className="product-name">
                    我要投稿
                  </span>
                  <span className="product-desc">
                    提升影响力的最有效方式
                  </span>
                </a>
                <a href="javascript:void(0)" className="item"
               >
                  <span className="product-icon">
                    <img src="/img/ic_cooperation2@2x-9185b.png" />
                  </span>
                  <span className="product-name">
                    商务合作
                  </span>
                  <span className="product-desc">
                    让品牌超越昨天，先见未来
                  </span>
                </a>
                <a href="#" className="item">
                  <span className="product-icon">
                    <img src="/img/1is2ilcd29dsxx07.png" />
                  </span>
                  <span className="product-name">
                    城市加盟
                  </span>
                  <span className="product-desc">
                    携手并进，共享红利
                  </span>
                </a>
              </div>
            </div>
            <div className="app-download-pop pop-up-row mobile-hide">
              <div className="items-wrapper" style={{"transform":"translate(0px, -100%)"}}>
                <a href="javascript:void(0)" className="item app-item">
                  <span className="product-icon">
                    <img src="/img/ic_36kr@2x-9a9cd.png" />
                  </span>
                  <span className="product-name">
                    36氪
                  </span>
                  <span className="product-download">
                    <span className="product-qr">
                      <img src="/img/QR_36k@2x-c4e8e.png" />
                    </span>
                    <span className="product-version">
                      iPhone&amp;Android
                    </span>
                  </span>
                </a>
                <a href="javascript:void(0)" className="item app-item">
                  <span className="product-icon">
                    <img src="/img/jingzhun-logo-2-3ef0e.png" />
                  </span>
                  <span className="product-name">
                    鲸准 · 个人版
                  </span>
                  <span className="product-download">
                    <span className="product-qr">
                      <img src="/img/jingzhun-qrcode-3a27a.png" />
                    </span>
                    <span className="product-version">
                      iPhone&amp;Android
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </header>
        );
    }
}

export default Header;