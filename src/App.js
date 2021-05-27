import React, { useEffect, useState, useRef } from 'react'
import Entry from './components/Entry'
import AppBar from './components/AppBar'
import ImageList from './components/ImageList'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Info from './components/Info'
import BurgerMenu from './components/BurgerMenu'
import Burger from './components/Burger'
import mediaService from './services/media'
import useOnClickOutside from './hooks/OutsideClick'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'


const App = () => {
    const [allMedia, setAllMedia] = useState(null)
    const [loaded, setIsLoaded] = useState(false)
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

    useOnClickOutside(node, () => setOpen(false))

    const entry = document.getElementById('entry')

    if (entry) {
        try {
            console.log(entry)
            setTimeout(() => {
                if (entry.parentNode) {
                    entry.parentNode.removeChild(entry)
                }
            }, 4000)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='mainContainer'>
            <Router>
                <Entry />
                <div ref={node}>
                    <BurgerMenu open={open} setOpen={setOpen} />
                    <Burger open={open} setOpen={setOpen} />
                </div>
                <AppBar />
                <Header />
                <Switch>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                    <Route exact path='/info'>
                        <Info />
                    </Route>
                    <Route exact path='/'>
                        <ImageList media={allMedia} loaded={loaded} />
                        <Contact />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default App