import React, { useEffect, useState } from 'react'
import AppBar from '../src/components/AppBar'
import Authorize from '../src/components/Authorize'
import ImageList from './components/ImageList'
import Header from './components/Header'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import Info from '../src/components/Info'
//import userService from './services/user'
import mediaService from './services/media'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    // const [userNode, setUserNode] = useState(null)
    const [allMedia, setAllMedia] = useState(null)
    const [loaded, setIsLoaded] = useState(false)

    const userID = '17841400630170565'
    const accessToken = 'IGQVJWVHRrUlZAzRzVhWWkyeWRLeXZAiZAjVWMVhxQ25sLWRLVVQ2YmV1OVJlYUNWUU5CeWJDY0lndy1hS2JmU3ZAuUmlyVEVzUGppYmtZAZA1lFUTktY2VjZAWVSSmhuay1EVVhadmowTU5n'

    /* useEffect(() => {
        userService
            .getUserNode(userID, accessToken)
            .then(userNode => {
                setUserNode(userNode)
            })
    },[])*/

    useEffect(() => {
        getMediaContent()
    }, [])

    const getMediaContent = () => {
        mediaService
            .getAllMedia(userID, accessToken)
            .then(allMedia => {
                setAllMedia(allMedia.data)
                setIsLoaded(true)
            })
    }

    return (
        <div>
            <Header />
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
                        <Route exact path='/info'>
                            <Info />
                        </Route>
                        <Route exact path='/authorize'>
                            <Authorize />
                        </Route>
                        <Route exact path='/'>
                            <div style={{ marginTop: '50px' }}>
                                <ImageList media={allMedia} loaded={loaded} fetch={getMediaContent} />
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>

    )
}

export default App