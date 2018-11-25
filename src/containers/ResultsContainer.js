import React, { Component } from 'react'
import ViewTable from '../components/ViewTable'
import CalcResult from '../components/CalcResult';

class ResultsContainer extends Component {
    render() {
        return (
            <div>
                <CalcResult filtered_votes={this.props.filtered_votes}/>
                <ViewTable filtered_votes={this.props.filtered_votes}/>
            </div>
        )
    }
}

export default ResultsContainer