/**
 * Created by playcrab on 17/6/7.
 */
import React from 'react'
import {Redirect} from 'react-router'

class ShopItemComp extends React.Component{

    constructor(props){
        super(props)

    }

    componentWillMount(){
        this.setState({redirect:false})
    }

    onClickedEvent(){

        this.setState({redirect:true});
    }

    render(){
        if (this.state.redirect){
            return <Redirect push to={{pathname : "/storyplayer/" + this.props.id}}/>
        }
        return(
           <div className="shopitem" onClick={this.onClickedEvent.bind(this)}>
               <img className="shopitem_img" src="./images/yeoman.png"></img>
               <p className="shopitem_desc">{this.props.desc}</p>
               <p className="shopitem_hot">{this.props.hot}</p>
           </div>
        );
    }
}

ShopItemComp.defaultProps={
    desc:"这将是一个恐怖故事 不拉不拉",
    hot:"100000tap",
    id:""
};

export default ShopItemComp
