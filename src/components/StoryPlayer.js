/**
 * Created by charly on 17/6/6.
 */
import React from 'react'

import ListView from './ListView'
import axios from 'axios'

class StoryPlayer extends React.Component{


    constructor(props){
        super(props);
        this.state = {data:[]};
        this.contentData = [];
        this.tapCount = 0;
    }

    tapBtnEvent(){
        console.log("tap Btn was clicked!")

        this.tapCount++;
        console.log(this.tapCount);
        let msgInfo = this.contentData[this.tapCount];


        this.setState((prevState)=>{
            prevState.data.push({name:msgInfo["角色"],msg:msgInfo["内容"]});
            this.state.data = prevState;
        })
    }
    componentDidMount(){
        // this.addTouchEvent();
        console.log(this.props.match.url);
        let urlArray = this.props.match.url.split("/")
        // console.log(urlArray);

        axios.get("http://172.16.129.51/api/index/getStoryContents?storyId=" + urlArray[2],{withCredentials:true}).then(function (response) {

            console.log(response.data);
            // this.state.data = response.data.data;
            this.contentData = response.data.data;
        }.bind(this))
    }
    render(){

        return  (
            <div className= "player" ref="divPlayer">
                <ListView items = {this.state.data}/>
                <button type="button" id = "tapBtn" onClick={this.tapBtnEvent.bind(this)}> taptap </button>

            </div>
        );


    }
}

StoryPlayer.defaultProps={

};

export default StoryPlayer;
