require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MsgBox from './MsgBox';
// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  	
	 constructor(props) {
	    super(props);
	    this.state = {data:[]};
	  }


	tapBtnEvent(){
  		console.log("The link was clicked!!");
  		
  		var list = this.state.data;
  		list.push(<MsgBox/>);
  		this.setState({data:list});

  		
  	}

  	render() {

	    return (
	      	<div id = "app" ref={(input)=>(this.div = input)}>
	      		{this.state.data}

	      	<button type="button" id="tapBtn" onClick={this.tapBtnEvent.bind(this)}>TapTapTap</button>

	      	</div>	
	      		
	    );
  }
}

AppComponent.defaultProps = { 
};

export default AppComponent;
