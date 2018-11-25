import React, { Component } from 'react'

class HostDetail extends Component {
    render() {
        return(
            <ul>
                <li>sender: {this.props.host[1]}</li>
                <li>title: {this.props.host[2]}</li>
                <li>description: {this.props.host[3]}</li>
                <li>reward: {this.props.host[4]}</li>
            </ul>
        )
    }
}

export default HostDetail