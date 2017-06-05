require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ListView from './ListView';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

	  constructor(props) {
	    super(props);
	    this.state = {data:[]};
	  }
	  tapBtnEvent(){
  		console.log("The link was clicked!!");
      this.setState((prevState)=>({
          data:prevState.data.push({name:"charly" , msg: "hello"})
      }));
  	}
  	componentDidMount(){

  		this.addTouchEvent()
  	}

  	render() {

	    return (
	      	<div id = "app">
            <ListView items = {this.state.data}/>
	      		<button type="button" id="tapBtn" onClick={this.tapBtnEvent.bind(this)}>TapTapTap</button>
	      	</div>
	    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
