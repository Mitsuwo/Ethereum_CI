import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import HostList from './components/home/HostList'
import Election from '..//build/contracts/Election.json'
import TruffleContract from 'truffle-contract'
import Hosting from './components/host/Hosting'
import About from './components/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HostContainer from './containers/HostContainer'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: '0x0',
            votes: [],
            hosts: [],
            hasVoted: false,
            loading: true,
            voting: false,
        }
        if (typeof web3 != 'undefined') {
            this.web3Provider = web3.currentProvider
        } else {
            this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
        }
    
        this.web3 = new Web3(this.web3Provider)
    
        this.election = TruffleContract(Election)
        this.election.setProvider(this.web3Provider)
    
        this.sendVote = this.sendVote.bind(this)
        this.sendHost = this.sendHost.bind(this)
    }

    componentDidMount() {
        // TODO: Refactor with promise chain
        this.web3.eth.getCoinbase((err, account) => {
            this.setState({ account })
            this.election.deployed().then((electionInstance) => {
                this.electionInstance = electionInstance
                // this.watchEvents()
                this.electionInstance.votesCount()
                .then((votesCount) => {
                    for (var i = 1; i <= votesCount; i++) {
                        this.electionInstance.votes(i)
                        .then((vote) => {
                            const votes = [...this.state.votes]
                            votes.push({
                                id: vote[0],
                                sender: vote[1],
                                level: vote[2],
                                value: vote[3],
                                hostId: vote[4],
                                when: vote[5],
                            });
                            this.setState({ votes: votes })
                        });
                    }
                })
                this.electionInstance.hostsCount().then((hostsCount) => {
                    for (var i = 1; i <= hostsCount; i++) {
                        this.electionInstance.hosts(i).then((host) => {
                            const hosts = [...this.state.hosts]
                            hosts.push({
                                id: host[0],
                                sender: host[1],
                                title: host[2],
                                description: host[3],
                                image: host[4],
                                reward: host[5],
                                end: host[6],
                                minValue: host[7],
                                maxValue: host[8],
                            });
                            this.setState({ hosts: hosts })
                        });
                    }
                })
            })
        })
    }
    
    sendVote(level, value, hostId) {
        this.setState({ voting: true })
        // console.log(level, hostId, value)
        this.electionInstance.vote(level, value, hostId, { from: this.state.account })
        .then((result) =>
            console.log('voted!')
        )
    }

    sendHost(title, description, image, reward, biddingTime, minValue, maxValue) {
        this.electionInstance.host(
            title,
            description,
            image,
            reward,
            biddingTime,
            minValue,
            maxValue,
            { from: this.state.account }
        ).then((result) =>
            console.log('sent!')
        )
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar account={this.state.account}/>
                    <Switch>
                        <Route exact path='/' component={() =>
                            <HostList
                                account={this.state.account}
                                hosts={this.state.hosts}
                                hasVoted={this.state.hasVoted}
                            />
                        } />
                        <Route path='/hosting' component={() =>
                            <Hosting
                                account={this.state.account}
                                votes={this.state.votes}
                                hosts={this.state.hosts}
                                hasVoted={this.state.hasVoted}
                                sendHost={this.sendHost}
                            />
                        }/>
                        <Route path='/host/:id' render={(match) =>
                            <HostContainer
                                sendVote={this.sendVote}
                                match={match}
                                votes={this.state.votes}
                                hosts={this.state.hosts}
                                remount={this.componentDidMount}
                            />}
                        />
                        <Route path='/about' component={() =>
                            <About />
                        } />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <div><App /></div>, document.querySelector('#root')
)
