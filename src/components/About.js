import React, { Component } from 'react'
import ViewTable from './ViewTable'

class About extends Component {
    render() {
        return(
            <div>
                <h4>投票結果</h4>
                <ViewTable votes={this.props.votes} />
            </div>
        )
    }
}

export default About