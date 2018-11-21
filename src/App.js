import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import Content from './components/Content'
import Election from '..//build/contracts/Election.json'
import TruffleContract from 'truffle-contract'
import VotingContainer from './components/VotingContainer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
        this.watchEvents = this.watchEvents.bind(this)
    }

    componentDidMount() {
        // TODO: Refactor with promise chain
        // this.web3.eth.defaultAccount = web3.eth.accounts[0]
        this.web3.eth.getCoinbase((err, account) => {
            this.setState({ account })
            this.election.deployed().then((electionInstance) => {
                this.electionInstance = electionInstance
                this.watchEvents()
                this.electionInstance.votesCount()
                .then((votesCount) => {
                    for (var i = 1; i <= votesCount; i++) {
                        this.electionInstance.votes(i)
                        .then((vote) => {
                            const votes = [...this.state.votes]
                            votes.push({
                                id: vote[0],
                                sender: vote[1],
                                value: vote[2],
                                hostId: vote[3],
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
                                reward: host[4],
                            });
                            this.setState({ hosts: hosts })
                        });
                    }
                })
                // this.electionInstance.voters(this.state.account).then((hasVoted) => {
                //     this.setState({ hasVoted, loading: false })
                // })
            })
        })
    }

    watchEvents() {
        // TODO: trigger event when vote is counted, not when component renders
        this.electionInstance.votedEvent({}, {
            fromBlock: 0,
            toBlock: 'latest'
        }).watch((error, event) => {
            this.setState({ voting: false })
        })
    }
    
    sendVote(value, hostId) {
        this.setState({ voting: true })
        console.log(value)
        console.log(hostId)
        this.electionInstance.vote(value, hostId, { from: this.state.account })
        .then((result) =>
        console.log('voted!')
        )
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={() =>
                            <Content
                                account={this.state.account}
                                votes={this.state.votes}
                                hosts={this.state.hosts}
                                hasVoted={this.state.hasVoted}
                                sendVote={this.sendVote} 
                            />
                        }/>
                        {/* <Route path='/project/:id' component={ProjectDetails} /> */}
                        <Route path='/home' component={() =>
                            <Home
                                account={this.state.account}
                                votes={this.state.votes}
                                hosts={this.state.hosts}
                                hasVoted={this.state.hasVoted}
                                sendVote={this.sendVote}
                            />
                        } />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <div><App /></div>, document.querySelector('#root')
)