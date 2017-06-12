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
          <div className = "ListView" ref="divList">
             {this.props.items.map((item,idx)=>(<MsgBox name={item.name} msg={item.msg} key={idx}/>))}
          </div>
      );
    }

    componentDidUpdate(){
        if (this.refs.divList){
            this.refs.divList.scrollTop = this.refs.divList.scrollHeight;
        }
    }


}

ListView.defaultProps={
  items:[],
};

export default ListView;
