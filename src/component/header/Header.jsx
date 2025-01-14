import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";
// import { useTranslation } from 'react-i18next';


class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render(){
        // const { t, i18n } = useTranslation();

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { color = 'default-color' } = this.props;
        const logoUrl = <img src="/assets/images/logo/lsf-logo.png" alt="Digital Agency" />
        // if(logo === 'light'){
        //     logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        // }else if(logo === 'dark'){
        //     logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        // }else if(logo === 'symbol-dark'){
        //     logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
        // }else if(logo === 'symbol-light'){
        //     logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        // }else{
        //     logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
        // }
        
        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li className="has-droupdown"><Link to="#">首页</Link>
                                    {/* <ul className="submenu">
                                        <li><Link to="/main-demo">Main Demo</Link></li>
                                        <li><Link to="/dark-main-demo">Main Demo Dark</Link></li>
                                        <li><Link to="/creative-agency">Creative Agency</Link></li>
                                        <li><Link to="/creative-landing">Creative One Page</Link></li>
                                        <li><Link to="/creative-portfolio">Creative Portfolio</Link></li>
                                        <li><Link to="/personal-portfolio">Personal Portfolio</Link></li>
                                        <li><Link to="/portfolio-landing">Portfolio One Page</Link></li>
                                        <li><Link to="/dark-portfolio-landing">Portfolio One Page 02</Link></li>
                                        <li><Link to="/digital-agency">Digital Agency</Link></li>
                                        <li><Link to="/startup">Startup</Link></li>
                                        <li><Link to="/paralax">Paralax</Link></li>
                                        <li><Link to="/portfolio-home">Minimal Portfolio</Link></li>
                                        <li><Link to="/business">Business</Link></li>
                                        <li><Link to="/home-particles">Home Particles</Link></li>
                                        <li><Link to="/studio-agency">Studio Agency</Link></li>
                                        <li><Link to="/designer-portfolio">Designer Portfolio</Link></li>
                                    </ul> */}
                                </li>
                                {/* <li className="has-droupdown"><Link to="/service" >Service</Link>
                                    <ul className="submenu">
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li>
                                    </ul>
                                </li> */}
                                <li><Link to="/about" >About</Link></li>

                                <li className="has-droupdown"><Link to="#pages" >Pages</Link>
                                    {/* <ul className="submenu">
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                        <li><Link to="/404">404</Link></li>
                                    </ul> */}
                                </li>
                                <li className="has-droupdown"><Link to="#" >Blocks</Link>
                                    {/* <ul className="submenu">
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/video-popup">Video Popup</Link></li>
                                        <li><Link to="/progressbar">Progressbar</Link></li>
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/counters">Counters</Link></li>
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/clint-logo">Clint Logo</Link></li>
                                        <li><Link to="/contact-form">Contact Form</Link></li>
                                        <li><Link to="/google-map">Google Map</Link></li>
                                        <li><Link to="/columns">Columns</Link></li>
                                        <li><Link to="/pricing-table">Pricing Table</Link></li>
                                    </ul> */}
                                </li>
                                <li><Link to="/contact" >Contact</Link></li>
                            </ul>
                        </nav>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;