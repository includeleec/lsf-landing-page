import React, { Component, Fragment } from "react";
// import Slider from "react-slick";
// import { slickDot } from "../page-demo/script";
import Scrollspy from "react-scrollspy";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
// import ServiceList from "../elements/service/ServiceList";
// import CounterOne from "../elements/counters/CounterOne";
// import Testimonial from "../elements/Testimonial";
// import Team from "../elements/Team";
// import BlogContent from "../elements/blog/BlogContent";
// import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
// import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: "text-center",
        category: "欢迎加入",
        title: "LOSS.Finance ",
        description:
            "Loss is an innovative DEFI project, which explores a fair and sustainable development of the economic model, as well as the radical incentive mechanism to achieve the goal. The value of LOSS comes from the community, and more people is the value.",
        buttonText: "Contact Us",
        buttonLink: "/contact",
    },
];

// const list = [
//     {
//         image: "image-1",
//         category: "Development",
//         title: "Getting tickets to the big show",
//     },
//     {
//         image: "image-2",
//         category: "Development",
//         title: "Getting tickets to the big show",
//     },
//     {
//         image: "image-3",
//         category: "Development",
//         title: "Getting tickets to the big show",
//     },
//     {
//         image: "image-4",
//         category: "Development",
//         title: "Getting tickets to the big show",
//     },
//     {
//         image: "image-3",
//         category: "Development",
//         title: "Getting tickets to the big show",
//     },
//     {
//         image: "image-4",
//         category: "Development",
//         title: "Getting tickets to the big show",
//     },
// ];

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
    stickyHeader() { }
    render() {
        // const PostList = BlogContent.slice(0, 5);

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
                                        src="/assets/images/logo/losslogo_s.png"
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
                                        <a href="#home">home</a>
                                    </li>
                                    <li><a target="_band" href="http://www.dexduck.app/token/0x7A95330742e203a2e14e4b0EbD765E03883b7508">dexduck</a></li>
                                    {/* <li>
                                        <a href="#about">about</a>
                                    </li> */}
                                    {/* <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#contact">Contact</a></li> */}
                                </Scrollspy>
                            </nav>
                            <div className="header-btn">
                                <a className="rn-button-style--2 rn-btn-small" href="https://loss-swap.netlify.app/">
                                    <span>use Loss</span>
                                </a>
                            </div>
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
                    <div className="bg_image" data-black-overlay="0">
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
                                                        <p className="description">
                                                        Contract Address（BSC）：<a href="https://bscscan.com/token/0x7A95330742e203a2e14e4b0EbD765E03883b7508" target="__blank">0x7A95330742e203a2e14e4b0EbD765E03883b7508</a>
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
                                        <h2 className="title">Goal</h2>
                                        <p>1. Clear objectives: the goal of LOSS is to reach 200000 active users.</p>
                                        <p>2. No Achieving No Gain: the initial supply is 100 million LOSS, with 10 BNB in swap liquidity, and the lptoken is locked by smart contract, if the active users are less than 200000, the team cannot remove the liquidity.</p>
                                        <p>
                                        3. There is a reward for achieving the goal: when 200000 users are reached, the project team will remove lptoken, and it is expected that there will be a lot of BNB and not too much LOSS. Most of them will be used for value management, and a small amount will be rewarded to those who make outstanding contributions to the LOSS.
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
                                        <h2 className="title">Mechanism</h2>
                                        <p>
                                        For everyone to have the same goal, transfer or sell LOSS, cost 100% fee !
                                        </p>
                                        <p>
                                        Buy is a loss, this is the origin of LOSS !
                                        </p>
                                        <p>
                                        Fee decreases linearly with the increase of active users, reaching 200000, the fee is permanently reduced to 2%.
                                        </p>
                                        <p>
                                        Fee is used for the following:
                                        </p>
                                        <p>
                                        1. 50% immediately destroyed, deflation.
                                        </p>
                                        <p>
                                            2. 50% into reward pool for liquidity mining.
                                        </p>
                                        <p>
                                        send 12 LOSS ----- transfer 24 LOSS

                                        </p>
                                        <p style={{marginLeft: 50}}>
                                        |---- receive 12 LOSS
                                        </p>
                                        <p style={{marginLeft: 50}}>
                                        |---- fee 12 LOSS (100%)
                                        </p>
                                        <p style={{marginLeft: 100}}>
                                        |--- 6 LOSS destroyed
                                        </p>
                                        <p style={{marginLeft: 100}}>
                                        |--- 6 LOSS into reward pool
                                        </p>
                                        <p>
                                        For example, send 12 LOSS and 24 LOSS are actually transferred out, of which 6 are transferred into black hole destruction, 6 are transferred into reward pool and 12 are actually received.
                                                *There is no fee for buying and liquidity mining.
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
                                        <h2 className="title">Mining</h2>
                                        <p>
                                        Unlike BTC and SUSHI, which mined by time, LOSS is mined by the growth of active users.
                                        </p>
                                        <p>
                                        Every time an active user is coming, 1 million LOSS will be mined to:
                                        </p>
                                        <p>
                                        1. 80% into reward pool for liquidity mining.
                                        </p>
                                        <p>
                                        2. 20% into swap for liquidity.
                                        </p>
                                        <p>
                                        With 200000 active users, there is no longer inflation, only deflation.
                                        </p>
                                        <p style={{marginLeft: 50}}>
                                        Mined 1M LOSS
                                        </p>
                                        <p style={{marginLeft: 100}}>
                                        |----- 80% into reward pool for liquidity mining
                                        </p>
                                        <p style={{marginLeft: 100}}>
                                        |----- 20% into swap for liquidity
                                        </p>
                                        <p>
                                        *Active users --- in order to avoid the amount of robot brushing, only those who hold more than 100000 LOSS is regarded as active user.
                                        </p>
                                        <p>
                                        *1 million LOSS --- calculated according to the average investment of 0.1 BNB of each active user, 1 million LOSS will be mined to curb the sharp rise of LOSS price.
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
                                        <h2 className="title">Airdrop</h2>
                                        <p>
                                        In order to give newbie a try, airdrop users are also needed.
                                        </p>
                                        <p>
                                        Through the faucet page, users can pay the gas fee to get a little LOSS.
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
                                        <h2 className="title">Q&A</h2>
                                        <storng>
                                         <b> What are the benefits of the project team?</b> 
                                        </storng>
                                        <p>
                                        Lptoken added by initial liquidity and lptoken added by 20% liquidity are locked to achieve the goal and encourage the project team to promote the project. Before the goal is achieved, the project team has no LOSS and no income. After reaching the goal, the project team has more BNB, less LOSS then can't break the price.
                                        </p>
                                        <br />
                                        <br />
                                        <storng>
                                        <b>What about the withdrawal liquidity of the project team after reaching the target?</b>
                                        </storng>
                                        <p>
                                        The liquidity provided by the project team only accounts for 20%, which will not have a great impact on the liquidity. The fee will be 2% by then, and the mutual circulation of DEX and CEX will be achieved. CEX can provide a large amount of liquidity.
                                        </p>
                                        <br />
                                        <br />
                                        <storng>
                                        <b>What is the fee for CEX?</b>
                                        </storng>
                                        <p>
                                        The fee remains unchanged, 100% is reduced linearly. Because the fee is too high, they are not circulating to each other, which means CEX purchases from DEX and sells futures to CEX users.
                                        </p>
                                        <br />
                                        <br />
                                        <storng>
                                        <b>Why is the fee so high?</b>
                                        </storng>
                                        <p>
                                        On the one hand, filtering out speculative users, all the people who come in are more religious; On the other hand, it can maintain the stability of currency price, less selling currency, and only half of the currency selling has little impact on the market. If the currency price falls, it not only deflation but also rewards lptoken holders, and encourages more users to add liquidity, which also helps to stabilize the currency price.
                                        </p>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                                        <h2 className="title">Info</h2>
                                        <storng>
                                         <h3> dex.guru:</h3> 
                                        </storng>
                                        <p>
                                            <a href="https://dex.guru/token/0x7a95330742e203a2e14e4b0ebd765e03883b7508-bsc" target="_band"> https://dex.guru/token/0x7a95330742e203a2e14e4b0ebd765e03883b7508-bsc</a>
                                        </p>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                                        <h2 className="title">Open Source</h2>
                                        <storng>
                                         <h3> LOSS contract code:</h3> 
                                        </storng>
                                        <p>
                                            <a href="https://bscscan.com/address/0x7a95330742e203a2e14e4b0ebd765e03883b7508#code" target="_band"> https://bscscan.com/address/0x7a95330742e203a2e14e4b0ebd765e03883b7508#code</a>
                                        </p>
                                        <br />
                                        <br />
                                        <storng>
                                         <h3> RewardPool contract code:</h3> 
                                        </storng>
                                        <p>
                                            <a href="https://bscscan.com/address/0x5D220bC580E370b568f6b0d4d1A9Ca056f8B878A#code" target="_band"> https://bscscan.com/address/0x5D220bC580E370b568f6b0d4d1A9Ca056f8B878A#code</a>
                                        </p>
                                        <br />
                                        <br />
                                        <storng>
                                         <h3> PancakeLiquidityRouter contract code: </h3> 
                                        </storng>
                                        <p>
                                            <a href="https://bscscan.com/address/0xef6b7a04bf73f8674b5b7bcdd460778862dd5b90#code" target="_band"> https://bscscan.com/address/0xef6b7a04bf73f8674b5b7bcdd460778862dd5b90#code</a>
                                        </p>
                                        <br />
                                        <br />
                                        <storng>
                                         <h3> PancakeLiquidityRouter contract code: </h3> 
                                        </storng>
                                        <p>
                                            <a href="https://bscscan.com/address/0x822ca080e094bf068090554a19bc3d6618c800b3#code" target="_band"> https://bscscan.com/address/0x822ca080e094bf068090554a19bc3d6618c800b3#code</a>
                                        </p>
                                        <br />
                                        <br />
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
                                        {/* <div className="section-title">
                                            <h3 className="title" style={{ color: "#f00" }}>
                                                郑重声明
                                            </h3>
                                            <p className="description" style={{ color: "#000" }}>
                                                程序员水平有限，代码可能有导致归零的风险，通过安全审计后开源，别重仓！别重仓！别重仓！
                                            </p>
                                        </div> */}
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
