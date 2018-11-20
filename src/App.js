import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import VotingContainer from './components/VotingContainer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <VotingContainer />    
            </div>
        )
    }
}

ReactDOM.render(
    <div><App /></div>, document.querySelector('#root')
)