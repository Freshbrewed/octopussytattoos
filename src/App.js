import React from 'react'
import AppBar from '../src/components/AppBar'
import Authorize from '../src/components/Authorize'
import PhotoList from './components/PhotoList'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'

import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'
import './App.css'

const App = () => {

    return (
        <div>
            <div className='mainContainer'>
                <Router>
                    <AppBar />
                    <Switch>
                        <Route exact path='/about'>
                            <About />
                        </Route>
                        <Route exact path='/contact'>
                            <Contact />
                        </Route>
                        <Route exact path='/authorize'>
                            <Authorize />
                        </Route>
                        <Route exact path='/'>
                            <PhotoList />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>

    )
}

export default App