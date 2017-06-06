import React from 'react'
import MsgBox from './MsgBox'

class ListView extends React.Component{

    // constructor(props){
    //     super(props)
    // }

    addTouchEvent(){
        console.log(this);
        console.log(this.div);

    }

    componentDidMount(){
        this.addTouchEvent();

    }
// {this.props.items.map((item)=>(
// <MsgBox name={item.name} msg={item.msg} />
// ))}
    render(){
      return(
          <div className = "ListView" ref={(input)=>(this.div = input)}>
             {this.props.items.map((item)=>(<MsgBox name={item.name} msg={item.msg} />))}
          </div>
      );
    }
}

ListView.defaultProps={
  items:[],
};

export default ListView;
