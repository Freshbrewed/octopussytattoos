import React, { useEffect, useState, useRef } from 'react'
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
    const accessToken = 'IGQVJVSTE3Q0pKU2U2ZAmk3aThib2FmOU1jYTQwRC1qWC1qT1hiX3VINGg4ejE4NFB5LXpXQ1gzaHJRd0psRm52T1ZA3Y2ttOW1oeEVTeGxyRFQyNkNvRGlWQzJYS0ZAJejB3Y0xMYlBn'

    useEffect(() => {
        mediaService
            .getAllMedia(userID, accessToken)
            .then(allMedia => {
                setAllMedia(allMedia.data)
                setIsLoaded(true)
            })
    }, [])

    useOnClickOutside(node, () => setOpen(false))

    return (
        <div className='mainContainer'>
            <Router>
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