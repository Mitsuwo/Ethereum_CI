import React, { Component } from 'react'
import VotingForm from '../components/VotingForm'
import ResultsContainer from './ResultsContainer'
import HostDetail from '../components/HostDetail'

class HostContainer extends Component {
    constructor(props) {
        super(props)
        this.filterList = this.filterList.bind(this)
    }
    state = {
        id: null,
        votes: this.props.votes,
    }
    componentWillMount() {
        let id = this.props.match.match.params.id
        this.setState({ id: id })
    }

    componentDidMount() {
        this.props.getHost(this.state.id)
        this.filterList()
    }

    filterList() {
        const filtered = this.state.votes.filter((vote) => {
          return vote.hostId == this.state.id
        })
        this.setState({votes: filtered})
    }

    render() {
        return(
            <div>
                <HostDetail host={this.props.host}/>
                <VotingForm sendVote={this.props.sendVote} hostId={this.state.id}/>
                <ResultsContainer filtered_votes={this.state.votes} />
            </div>
        )
    }
}

export default HostContainer