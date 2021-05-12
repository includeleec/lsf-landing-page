import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import Scrollspy from "react-scrollspy";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";

const SlideList = [
  {
    textPosition: "text-center",
    category: "欢迎加入",
    title: "LOSS.Finance ",
    description:
      "在DEFI世界里，土狗是仿盘的意思，LSF也是模仿了safemoon，pig等项目，并进行魔改创新在我们的价值观里，土狗代表实诚，不坑不骗是底线，也喜欢坐等发财。",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const list = [
  {
    image: "image-1",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-2",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
];

class CreativeLanding extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  stickyHeader() {}
  render() {
    const PostList = BlogContent.slice(0, 5);

    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    return (
      <Fragment>
        <Helmet pageTitle="LOSS.Finance" />
        {/* Start Header Area  */}
        <header className="header-area formobile-menu header--fixed default-color">
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <img
                    className=""
                    src="/assets/images/logo/lsf-logo.png"
                    alt="Logo Images"
                    style={{ width: 50, height: 50 }}
                  />
                  {/* <img className="logo-2" src="/assets/images/logo/logo-all-dark.png" alt="Logo Images"/> */}
                </a>
              </div>
            </div>
            <div className="header-right">
              <nav className="mainmenunav d-lg-block">
                <Scrollspy
                  className="mainmenu"
                  items={[
                    "home",
                    "service",
                    "about",
                    "portfolio",
                    "team",
                    "testimonial",
                    "blog",
                    "contact",
                  ]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <a href="#home">首页</a>
                  </li>
                  {/* <li><a href="#service">Service</a></li> */}
                  <li>
                    <a href="#about">关于</a>
                  </li>
                  {/* <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#contact">Contact</a></li> */}
                </Scrollspy>
              </nav>
              {/* <div className="header-btn">
                                <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                    <span>buy now</span>
                                </a>
                            </div> */}
              {/* Start Humberger Menu  */}
              <div className="humberger-menu d-block d-lg-none pl--20">
                <span
                  onClick={this.menuTrigger}
                  className="menutrigger text-white"
                >
                  <FiMenu />
                </span>
              </div>
              {/* End Humberger Menu  */}
              <div className="close-menu d-block d-lg-none">
                <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                  <FiX />
                </span>
              </div>
            </div>
          </div>
        </header>
        {/* End Header Area  */}

        {/* Start Slider Area   */}
        <div className="slider-activation slider-creative-agency" id="home">
          <div className="bg_image" data-black-overlay="6">
            {SlideList.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        <div className="banner-bg"></div>
                        {/* {value.category ? <span>{value.category}</span> : ''} */}
                        {value.title ? (
                          <h1 className="title theme-gradient">
                            {value.title}
                          </h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description" sytle={{ fontSize: 14 }}>
                            {value.description}
                          </p>
                        ) : (
                          ""
                        )}
                        {/* {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''} */}

                        <br />

                        <div className="row">
                          <div className="col-lg-12">

                            <p  className="description">
                              合约地址（BSC）：<a href="https://bscscan.com/token/0x7231ec0591e97daa4ba72ece128b178c7279e0ee"  target="__blank">0x7231ec0591e97dAA4Ba72EcE128b178C7279E0eE</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start Portfolio Area */}
        <div
          className="portfolio-area pt--120 pb--140 bg_color--1"
          id="portfolio"
        >
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                    <h2 className="title">介绍</h2>
                    <p>无私募无空投无预挖，唯一获得方式就是买币</p>
                    <p>买入即亏损，只能坐等翻倍，不翻倍就是亏</p>
                    <p>
                      转账收取50%手续费，买币没有手续费，卖币额外收取100%手续费（等同于50%手续费）。手续费空投给所有持币用户，持币即挖矿
                    </p>
                    <p>
                      手续费随持币人数增加而线性降低，达到20万人，手续费降为0%
                    </p>
                  </div>
                </div>
              </div>

              <br />
              <br />
              <br />

              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                    <h2 className="title">创世宣言</h2>
                    <p>
                      土狗代表不起眼的魔改项目，也代表梦想一夜暴富的草根精神
                    </p>

                    <p>
                      土狗项目通常由底层打工人发起，比如我们，没啥钱去上交易所，没有资方，不会拉盘。但是打过技术的工，会开发自己的交易所以及各种DEFI衍生项目
                    </p>
                    <p>
                      在DEFI世界里，土狗是仿盘的意思，LSF也是模仿了safemoon，pig等项目，并进行魔改创新
                    </p>
                    <p>
                      在我们的价值观里，土狗代表实诚，不坑不骗是底线，也喜欢坐等发财
                    </p>
                    <p>
                      如果你在币圈被割了，如果你生活不如意，买点LSF吧，在社区里一起唏嘘往事，然后坐等回本
                    </p>

                    <p>我们是一群中年程序员，想到什么有趣的，我们就开发什么</p>
                    <p>
                      我们希望能建立一个LSF社区，花几碗螺蛳粉的钱买点币放着就好了，亏了也没啥大不了，反正手续费那么高卖了心里也难受，就看着币价每天涨，心里舒服，如果币价跌了，那就是有人卖币了，持币人收到手续费分红也蛮开心的
                    </p>
                    <p>别重仓LSF，我们除了技术和瞎逼逼，别的没啥本事</p>
                  </div>
                </div>
              </div>
              {/* <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="portfolio" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Service Area  */}
        {/* <div
          className="service-area creative-service-wrapper ptb--120 bg_color--1"
          id="service"
        >
          <div className="container">
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Service Area  */}

        {/* Start About Area */}
        <div className="about-area ptb--120 bg_color--5" id="about">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                {/* <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                    </div>
                                </div> */}
                <div className="col-lg-12">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h3 className="title" style={{ color: "#f00" }}>
                        郑重声明
                      </h3>
                      <p className="description" style={{ color: "#000" }}>
                        程序员水平有限，代码可能有导致归零的风险，通过安全审计后开源，别重仓！别重仓！别重仓！
                      </p>
                    </div>
                    {/* <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Who we are</h3>
                                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Who we are</h3>
                                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                </div>
                                            </div>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}

        {/* Start CounterUp Area */}
        {/* <div className="rn-counterup-area pt--140 p pb--110 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div> */}
        {/* End CounterUp Area */}

        {/* Start Team Area  */}
        {/* <div className="rn-team-area ptb--120 bg_color--1" id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                                    <h2 className="title">Skilled Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
                        </div>
                    </div>
                </div> */}
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        {/* <div className="rn-testimonial-area bg_color--5 ptb--120" id="testimonial">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div> */}
        {/* End Testimonial Area */}

        {/* Start Blog Area */}
        {/* <div className="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section-title text-left">
                                    <h2>Latest News</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
                            <div className="col-lg-12">
                                <Slider {...slickDot}>
                                    {PostList.map((value , i ) => (
                                        <div className="blog blog-style--1" key={i}>
                                            <div className="thumbnail">
                                                <a href="/blog-details">
                                                    <img src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                                </a>
                                            </div>
                                            <div className="content">
                                                <p className="blogtype">{value.category}</p>
                                                <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                                <div className="blog-btn">
                                                    <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>    
                    </div>    
                </div> */}
        {/* End Blog Area */}

        {/* Start Contact Us */}
        {/* <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
                    <Contact />
                </div> */}
        {/* End Contact Us */}

        {/* Start Brand Area */}
        {/* <div className="rn-brand-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* End Brand Area */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default CreativeLanding;
