import React, { Component } from 'react'
import VotingForm from '../components/VotingForm'
import ResultsContainer from './ResultsContainer'
import HostDetail from '../components/HostDetail'

class HostContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.match.params.id,
            votes: this.props.votes.filter((vote) => {
                return vote.hostId == this.props.match.match.params.id
            }),
            host: this.props.hosts[this.props.match.match.params.id - 1],
        }
    }

    render() {
        return(
            <div>
                <hr/>
                <HostDetail host={this.state.host} remount={this.props.remount}/>
                <hr/>
                <VotingForm sendVote={this.props.sendVote} hostId={this.state.id}/>
                <ResultsContainer votes={this.state.votes}/>
            </div>
        )
    }
}

export default HostContainer