import React, { useEffect, useState, useRef } from 'react'

import userService from './services/user'
import mediaService from './services/media'
import useOnClickOutside from './hooks/OutsideClick'

import Entry from './components/Entry'
import AppBar from './components/AppBar'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Info from './components/Info'
import Gallery from './components/Gallery'
import BurgerMenu from './components/BurgerMenu'
import Burger from './components/Burger'
import SneakPeek from './components/SneakPeek'
import Scroll from './components/Scroll'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    const [allMedia, setAllMedia] = useState(null)
    const [isPlayed, setIsPlayed] = useState(false)
    const [loaded, setIsLoaded] = useState(false)
    const [open, setOpen] = useState(false)
    const [isClicked, setClicked] = useState(false)
    const node = useRef()
    const userID = '17841402105232117'
    const accessToken = 'IGQVJWWTBtdGVrQ2VsMm5lQnlmRkttX3c2YnhNTXQxQVp0YWdWaEhRYjRkbGpLQkYxYkVCTFZAwdlRaczVXcmI2eHZAaZAUQ3V1MxaWstUlZA3b1dFX1laUE4yaHdCTUZAKMnFsbWFyM2gxWlVUbkJFanNmZAgZDZD'

    useEffect(() => {
        mediaService
            .getAllMedia(userID, accessToken)
            .then(allMedia => {
                setAllMedia(allMedia.data)
                setIsLoaded(true)
            })

        userService
            .refreshLongToken(accessToken)
            /*.then(node => {
                console.log(node.expires_in)
            })*/
    }, [])

    useEffect(() => {
        const body = document.getElementById('contact')
        if (body && isPlayed) {
            body.scrollIntoView({
                behavior: 'smooth'
            }, 500)
        }
    }, [isClicked])

    useOnClickOutside(node, () => setOpen(false))

    return (
        <>
            <Router>
                <Scroll id='entry' >
                    <Entry isPlayed={isPlayed} setIsPlayed={setIsPlayed} />
                </Scroll>
                <div ref={node}>
                    <BurgerMenu open={open} setOpen={setOpen} isClicked={isClicked} setClicked={setClicked} />
                    <Burger open={open} setOpen={setOpen} />
                </div>
                <AppBar isClicked={isClicked} setClicked={setClicked} />
                <Header />
                <Switch>
                    <Route exact path='/info'>
                        <Scroll id='languageButton'>
                            <Info />
                        </Scroll>
                    </Route>
                    <Route exact path='/gallery'>
                        <Scroll id='grid-scroll'>
                            <Gallery media={allMedia} loaded={loaded} />
                        </Scroll>
                    </Route>
                    <Route exact path='/'>
                        {isPlayed ?
                            <Scroll id='home'>
                                <About />
                                <SneakPeek media={allMedia} />
                                <Contact />
                            </Scroll>
                            : <div>
                                <About />
                                <SneakPeek media={allMedia} />
                                <Contact />
                            </div>}
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </>
    )
}

export default App