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
                <BrowserRouter>
                    <div>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/voting' component={VotingContainer} />
                    </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(
    <div><App /></div>, document.querySelector('#root')
)