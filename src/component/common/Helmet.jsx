import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} ｜ 土狗代表不起眼的魔改项目，也代表梦想一夜暴富的草根精神 </title>
                    <meta name="description" content="Trydo – Multipurpose React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Trydo React Template will create that various landing Template, Creative Agency, And Corporate Website ." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
