/**
 * Created by charly on 17/6/6.
 */

import React from 'react'
import {Router,Route,IndexRoute,Redirect} from 'react-router'

import StoryPlayer from '../components/StoryPlayer'
import StoryEditer from '../components/StoryEditer'
import StoryShop from '../components/StoryShop'
import LoginPopup from '../components/LoginPopup'
import NotFoundPage from '../components/NotFoundPage'

const RootRoter=(
    <Router>
        <Route exact path="/" render={()=>(<Redirect to="/StoryShop"/>)}/>
        <Route path="/StoryPlayer" component={StoryPlayer}/>
        <Route path="/StoryEditer" component={StoryEditer}/>
        <Route path="/StoryShop" component={StoryShop}/>
        <Route path="/LoginPopup" component={LoginPopup}/>
            <Route path="404" component={NotFoundPage}/>

            <Redirect from="*" to = '404'/>
    </Router>
)

export default RootRoter;
