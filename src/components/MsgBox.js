import React from 'react';

class MsgBox extends React.Component{




	render(){
		return(
			<div className="msgBox"> 
				<h4>{this.props.name}</h4>
				<p>{this.props.msg}</p>
			</div>
		);
	}
}

MsgBox.defaultProps = {

	name: "charly",
	msg: "test"

};

export default MsgBox;
