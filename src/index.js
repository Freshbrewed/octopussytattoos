import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from '../src/components/AppBar'

const App = () => {

    return (
        <div>
            <p>Hello world</p>
            <AppBar />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))