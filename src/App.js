import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import VotingContainer from './components/VotingContainer'
import Navbar from './components/Navbar'

class App extends Component {
    

    render() {
        return (
            <div>
                <Navbar />
                <VotingContainer />
            </div>
        )
    }
}

ReactDOM.render(
    <div><App /></div>, document.querySelector('#root')
)