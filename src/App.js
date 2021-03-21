import React, { useEffect, useState } from 'react'
import AppBar from '../src/components/AppBar'
import ImageList from './components/ImageList'
import Header from './components/Header'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import Info from '../src/components/Info'
import Notification from '../src/components/Notification'
import GoogleMaps from '../src/components/GoogleMaps'
import mediaService from './services/media'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    const [allMedia, setAllMedia] = useState(null)
    const [loaded, setIsLoaded] = useState(false)
    const [notification, setNotification] = useState(null)

    const userID = '17841402105232117'
    const accessToken = 'IGQVJVSTE3Q0pKU2U2ZAmk3aThib2FmOU1jYTQwRC1qWC1qT1hiX3VINGg4ejE4NFB5LXpXQ1gzaHJRd0psRm52T1ZA3Y2ttOW1oeEVTeGxyRFQyNkNvRGlWQzJYS0ZAJejB3Y0xMYlBn'

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
            <div className='mainContainer'>
                <Header />
                <Router>
                    <AppBar />
                    <Switch>
                        <Route exact path='/about'>
                            <About />
                        </Route>
                        <Route exact path='/contact'>
                            <Contact setNotification={setNotification} />
                            <Notification notification={notification} />
                        </Route>
                        <Route exact path='/info'>
                            <Info />
                        </Route>
                        <Route exact path='/'>
                            <ImageList media={allMedia} loaded={loaded} fetch={getMediaContent} />
                            <GoogleMaps />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default App