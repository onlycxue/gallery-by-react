/**
 * Created by charly on 17/6/6.
 */
import React from 'react'
import ShopItemComp from './ShopItemComp'
import ShopItemAdd from './ShopItemAdd'

import axios from 'axios'

class StoryShop extends React.Component{

    constructor(props){
        super(props);

        this.state={
            storys:[],
            cates:[]
        };
    }

    componentWillMount(){

    }

    componentDidMount(){

        axios.get("http://172.16.129.51/api/index/getStoryList",{withCredentials:true}).then(function (response) {

            console.log(response.data);
            let data = response.data.data;
            console.log(data.storys);
            // console.log(data.storys.keys());
            let storyArray = [];
            let catesArray = [];
            for(let key of Object.keys(data.storys)){

                storyArray.push(data.storys[key]);
            }

            for(let key of Object.keys(data.cates)){
                catesArray.push(data.cates[key])
            }

            this.setState({storys:storyArray,cates:catesArray});

            console.log(this.state);

        }.bind(this))
    }

    render(){
        var items = [];
        this.state.storys.map(function(currObj){
            items.push(<ShopItemComp desc={currObj.name } hot={currObj.author} id={currObj._id.$id}/>);
        });
        return(
            <div className="storyshop" >
                {items}
            </div>
        );
    }
}

StoryShop.defaultProps={

};

export default StoryShop;
