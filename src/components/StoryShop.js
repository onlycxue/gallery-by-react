/**
 * Created by charly on 17/6/6.
 */
import React from 'react'
import ShopItemComp from './ShopItemComp'
import ShopItemAdd from './ShopItemAdd'

class StoryShop extends React.Component{

    render(){
        return(
            <div className="storyshop" >
                <ShopItemComp/>
                <ShopItemComp/>
                <ShopItemComp/>
                <ShopItemComp/>
                <ShopItemComp/>
                <ShopItemComp/>
                <ShopItemComp/>
                <ShopItemComp/>
            </div>
        );
    }
}

StoryShop.defaultProps={

};

export default StoryShop;
