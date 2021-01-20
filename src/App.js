/* eslint-disable no-unused-vars */
import React from 'react'
import AppBar from '../src/components/AppBar'
import Authorize from '../src/components/Authorize'
import PhotoList from './components/PhotoList'
import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'
import './App.css'

const App = () => {

    //const baseUrl = 'localhost:3000'

    //const authUrl = 'https://api.instagram.com/oauth/authorize?client_id=168993578335569&redirect_uri=localhost:3000&scope=user_profile,user_media&response_type=code'

    return (
        <div>
            <Router>
                <AppBar />
                <Switch>
                    <Route exact path='/authorize'>
                        <Authorize />
                    </Route>
                    <Route exact path='/'>
                        <PhotoList />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App