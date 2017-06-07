/**
 * Created by charly on 17/6/6.
 */
import React from 'react'

import ListView from './ListView'

class StoryPlayer extends React.Component{


    constructor(props){
        super(props);
        this.state = {data:[]};
    }

    tapBtnEvent(){
        console.log("tap Btn was clicked!")

        this.setState((prevState)=>{
            prevState.data.push({name:"charly",msg:"hello"});
            this.state.data = prevState;
        })

    }
    componentDidMount(){
        // this.addTouchEvent();
    }
    render(){

        return  (
            <div className= "player" >
                <ListView items = {this.state.data}/>
                <button type="button" id = "tapBtn" onClick={this.tapBtnEvent.bind(this)}> taptap </button>

            </div>
        );


    }



}

StoryPlayer.defaultProps={

};

export default StoryPlayer;
