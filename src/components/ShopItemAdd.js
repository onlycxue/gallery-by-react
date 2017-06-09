/**
 * Created by playcrab on 17/6/8.
 */
import React from 'react'

import {Link} from 'react-router-dom'

class ShopItemAdd extends React.Component{

    constructor(props){
        super(props)
    }

    onClickEvent(){
        console.log(">>>>>> hello ")

    }
// <p className="tips">编辑</p>
    render(){
        return(
            <div className="ShopItemAdd" onClick={this.onClickEvent}>

             </div>)
    }

}

export default ShopItemAdd;
