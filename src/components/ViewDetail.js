import React, { Component } from 'react'

class ViewDetail extends Component {
    state = {
        id: null,
    }
    componentDidMount() {
        let id = this.props.match.params.id
        this.setState({id: id})
    }
    render() {
        console.log(this.props.match.params.id)
        return(
            <div>
                {this.state.id}
            </div>
        )
    }
}

export default ViewDetail