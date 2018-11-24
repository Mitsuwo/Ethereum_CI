import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import HostList from './components/HostList'
import Election from '..//build/contracts/Election.json'
import TruffleContract from 'truffle-contract'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import VotingForm from './components/VotingForm';
import Navbar from './components/Navbar'
import ViewDetail from './components/ViewDetail'

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
            host: [],
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
        this.sendHost = this.sendHost.bind(this)
        this.getHost = this.getHost.bind(this)
    }

    componentDidMount() {
        // TODO: Refactor with promise chain
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

    sendHost(title, description, reward) {
        this.electionInstance.host(title, description, reward, { from: this.state.account })
        .then((result) =>
            console.log('sent!')
        )
    }

    getHost(id) {
        console.log(id)
        this.electionInstance.getHost(id, { from: this.state.account })
        .then((result) =>
            this.setState({host: result})
        )
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar account={this.state.account}/>
                    <Switch>
                        <Route exact path='/' component={() =>
                            <Home
                                account={this.state.account}
                                votes={this.state.votes}
                                hosts={this.state.hosts}
                                hasVoted={this.state.hasVoted}
                                sendHost={this.sendHost}
                            />
                        }/>
                        <Route path='/hostlist/:id' render={(match) =>
                            <ViewDetail
                                hosts={this.state.hosts}
                                getHost={this.getHost}
                                match={match}
                                host={this.state.host}
                            />}
                        />
                        {/* <Route path='/hostlist/:id' component={ViewDetail} hosts={this.state.hosts}/> */}
                        <Route path='/hostlist' component={() =>
                            <HostList
                                account={this.state.account}
                                hosts={this.state.hosts}
                                hasVoted={this.state.hasVoted}
                            />
                        } />
                        <Route path='/about' component={() =>
                            <About votes={this.state.votes} />
                        } />
                        <Route path='/voting' component={() =>
                            <VotingForm
                                votes={this.state.votes}
                                sendVote={this.state.sendVote}
                                account={this.state.account}
                            />
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
