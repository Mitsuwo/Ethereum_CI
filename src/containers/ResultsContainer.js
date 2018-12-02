import React, { Component } from 'react'
import ViewTable from '../components/ViewTable'
import CalcResult from '../components/CalcResult';

class ResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: this.props.votes.map((vote) => vote.value.toNumber()),
            long: this.props.votes.length,
        }
    }
    render() {
        return (
            <div>
                <CalcResult values={this.state.values} long={this.state.long}/>
                <ViewTable votes={this.props.votes}/>
            </div>
        )
    }
}

export default ResultsContainer