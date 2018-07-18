import React, {Component} from 'react'

class Footer extends Component{

    constructor (...args) {
        super(...args);
    }
    
    render () {
        return (
            <footer className="common-footer">
        <div className="sections">
          <section className="product-section">
            <h3>产品和服务</h3>
            <div className="items-wrapper">
              <a href="#" className="item">
                <span className="product-icon">
                  <img src="/img/ic_36kr@2x-9a9cd.png" />
                </span>
                <span className="product-name">36氪媒体</span>
                <span className="product-desc">让一部分人先看到未来</span>
              </a>
              <a href="#" className="item">
                <span className="product-icon">
                  <img src="/img/4dvu0zykchyo7hs2.png" />
                </span>
                <span className="product-name">氪空间</span>
                <span className="product-desc">联合办公标杆企业</span>
              </a>
              <a href="#" className="item">
                <span className="product-icon">
                  <img src="/img/jingzhun-logo-1-614ef.png" />
                </span>
                <span className="product-name">鲸准</span>
                <span className="product-desc">让每一次选择都心中有数</span>
              </a>
            </div>
            <div className="feedback">
            </div>
          </section>
          <section className="link-section">
            <h3>关于36氪</h3>
            <div className="links">
              <a href="#" rel="nofollow">关于我们</a>
              <a href="#" rel="nofollow">寻求报道</a>
              <a href="javascript:void(0)" rel="nofollow">我要投稿</a>
              <a href="#" rel="nofollow">城市加盟</a>
              <a href="#" rel="nofollow">加入我们</a>
              <a href="#" rel="nofollow">APP下载</a>
            </div>
          </section>
          <section className="partner-section">
            <h3>合作伙伴</h3>
            <ul className="footer-partner">
              <li>
                <a href="#" rel="nofollow" className="external">
                  <img alt="阿里云" src="/img/aly.png" />
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="external">
                  <img alt="腾讯云" src="/img/txyun.png" />
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="external">
                  <img alt="又拍云" src="/img/upy.png" />
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="external">
                  <img alt="七牛云存储" src="/img/qny.png" />
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="external">
                  <img alt="融云" src="/img/ry.png" />
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="external">
                  <img alt="听云" src="/img/ty.png" />
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="external">
                  <img alt="高迪传媒" src="/img/gaodi-95fb8.png" />
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="external">
                  <img alt="上直播" src="/img/shangzhibo-ede60.png" />
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="external">
                  <img alt="环信" src="/img/huanxin-34376.png" />
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="external">
                  <img alt="teambition" src="/img/teambition-9915f.png" />
                </a>
              </li>
            </ul>
          </section>
          <section className="qr-section">
            <h3>36氪APP下载</h3>
            <img className="qr" alt="36氪APP下载" src="/img/57rrbw8czufu0hqm.png" />
            <div>
              iPhone &amp; Android
            </div>
          </section>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="footer-logo">
              <a href="#">
                <img src="/img/logo_white@2x-ae14b.png" alt="" />
              </a>
            </div>
            <div className="copyright">
              <span className="mobile-hide">
                本站由
                <a href="#" rel="nofollow">
                  <img alt="阿里云" style={{"height":"12px","verticalAlign":"middle","marginRight":"-10px","marginLeft":"10px","position":"relative","top":"-2px"}} src="/img/aliyunfooter.png" />
                </a>
              </span>
              <span className="law">
                © 2011~2018 北京品新传媒文化有限公司 | 京ICP备12031756号 | 京ICP证150143号
                <span className="mobile-hide">
                  |
                  <a href="#">
                    京公网安备11010802020581号
                  </a>
                </span>
              </span>
              <a className="safe-logo" href="#">
                <img alt="品牌宝" src="/img/gw_83x30.png" />
              </a>
              <br/>
            </div>
            <div className="share">
              <a className="iconfooter-weibo" href="#" rel="nofollow"></a>
              <a className="iconfooter-rss" href="#" rel="nofollow"></a>
            </div>
          </div>
        </div>
      </footer>
        );
    }
}

export default Footer;