/**
 * Created by charly on 17/6/6.
 */

import React from 'react'
// import {Redirect} from 'react-router'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'

import StoryPlayer from '../components/StoryPlayer'
import StoryEditer from '../components/StoryEditer'
import StoryShop from '../components/StoryShop'
import LoginPopup from '../components/LoginPopup'
import NotFoundPage from '../components/NotFoundPage'

const RootRoter=(
    <Router>
        <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/storyshop"/>)}/>
            <Route path="/storyeditor" component={StoryEditer}/>
            <Route path="/storyshop" component={StoryShop}/>
            <Route path="/storyplayer" component={StoryPlayer}/>
            <Route path="/login" component={LoginPopup}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </Router>
)

export default RootRoter;
