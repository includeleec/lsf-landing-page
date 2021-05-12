import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: '介绍：',
        description: '无私募无空投无预挖，唯一获得方式就是买币 买入即亏损，只能坐等翻倍，不翻倍就是亏，转账收取50%手续费，买币没有手续费，卖币额外收取100%手续费（等同于50%手续费）。手续费空投给所有持币用户，持币即挖矿手续费随持币人数增加而线性降低，达到20万人，手续费降为0%。'
    },
    {
        icon: <FiLayers />,
        title: '买币方法：',
        description: '所有的LSF已转入pancakeswap自由流通，开发者也需要从swap买币',
        button: true,
        buttonText: '现在买入',
        url: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x7231ec0591e97dAA4Ba72EcE128b178C7279E0eE'
    },
    {
        icon: <FiUsers />,
        title: '代币合约地址：',
        description: '已部署在BSC',
        button: true,
        buttonText: '合约地址',
        url: 'https://bscscan.com/address/0x7231ec0591e97dAA4Ba72EcE128b178C7279E0eE'
    },
    // { 
    //     icon: <FiMonitor />,
    //     title: 'Mobile App Development',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // },
    // {
    //     icon: <FiUsers />,
    //     title: 'Marketing & Reporting',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // },
    // { 
    //     icon: <FiMonitor />,
    //     title: 'Mobile App Development',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            {/* <a href="/service-details"> */}
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                        <p>{val.button && (<a className="rn-button-style--2 btn-primary-color" href={val.url}> <span>{val.buttonText}</span> </a>)}</p>
                                    </div>
                                </div>
                            {/* </a> */}
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
