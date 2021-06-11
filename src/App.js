import React, { useEffect, useState, useRef } from 'react'
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
import mediaService from './services/media'
import useOnClickOutside from './hooks/OutsideClick'
import SneakPeek from './components/SneakPeek'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'


const App = () => {
    const [allMedia, setAllMedia] = useState(null)
    const [loaded, setIsLoaded] = useState(false)
    const [played, setIsPlayed] = useState(false)
    const [open, setOpen] = useState(false)
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
    }, [])

    useEffect(() => {
        const entry = document.getElementById('entry')
        if (entry && !played) {
            try {
                setTimeout(() => {
                    if (entry.parentNode) {
                        entry.parentNode.removeChild(entry)
                        setIsPlayed(true)
                    }
                }, 3650)
            }
            catch (error) {
                console.log(error)
            }
        }
    }, [])

    useOnClickOutside(node, () => setOpen(false))

    return (
        <div className='mainContainer'>
            <Router>
                <Entry played={played} />
                <div ref={node}>
                    <BurgerMenu open={open} setOpen={setOpen} />
                    <Burger open={open} setOpen={setOpen} />
                </div>
                <AppBar />
                <Header />
                <Switch>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                    <Route exact path='/info'>
                        <Info />
                    </Route>
                    <Route exact path='/gallery'>
                        <Gallery media={allMedia} loaded={loaded} />
                    </Route>
                    <Route exact path='/'>
                        <About />
                        <SneakPeek />
                        <Contact />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default App