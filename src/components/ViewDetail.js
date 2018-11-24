import React, { Component } from 'react'

class ViewDetail extends Component {
    state = {
        id: null,
        results: null,
    }
    componentWillMount() {
        let id = this.props.match.match.params.id
        this.setState({ id: id })
    }

    componentDidMount() {
        this.props.getHost(this.state.id, { from: this.state.account })
    }

    render() {
        return(
            <ul>
                <li>id: {this.props.host[1]}</li>
                <li>title: {this.props.host[2]}</li>
                <li>description: {this.props.host[3]}</li>
                <li>reward: {this.props.host[4]}</li>
            </ul>
        )
    }
}

export default ViewDetail