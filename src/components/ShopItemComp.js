/**
 * Created by playcrab on 17/6/7.
 */
import React from 'react'
class ShopItemComp extends React.Component{

    render(){
        return(
           <div>
               <img src="./images/shopitem_bg.png"></img>>
               <p className="shopitem_desc">{this.props.desc}</p>
               <p className="shopitem_hot">{this.props.hot}</p>
           </div>
        );
    }
}

ShopItemComp.defaultProps={
    desc:"这是一个描述",
    hot:"100000tap"
};

export default ShopItemComp
