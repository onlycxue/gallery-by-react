/**
 * Created by playcrab on 17/6/7.
 */
import React from 'react'
class ShopItemComp extends React.Component{

    render(){
        return(
           <div className="shopitem">
               <img className="shopitem_img" src="./images/yeoman.png"></img>
               <p className="shopitem_desc">{this.props.desc}</p>
               <p className="shopitem_hot">{this.props.hot}</p>
           </div>
        );
    }
}

ShopItemComp.defaultProps={
    desc:"这将是一个恐怖故事 不拉不拉",
    hot:"100000tap"
};

export default ShopItemComp
