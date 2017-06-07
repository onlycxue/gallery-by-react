require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ListView from './ListView';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

	  constructor(props) {
	      super(props);
          this.state = {data:[]};
          // this.story=[
          //     {name:"Lilei",msg:""}
          //
          //
          // ]
	  }
	  tapBtnEvent(){
  		console.log("The link was clicked!!");
      this.setState((prevState)=> {

          prevState.data.push({name: "charly", msg: "hello"})
          this.state.data = prevState;
      })
      console.log(this.state.data);
  	}
  	componentDidMount(){

  		this.addTouchEvent()
  	}

  	render() {

	    return (
	      	<div id = "app">
                <ListView items={this.state.data}/>
                <button type="button" id="tapBtn" onClick={this.tapBtnEvent.bind(this)}>TapTapTap</button>
	      	</div>
	    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
