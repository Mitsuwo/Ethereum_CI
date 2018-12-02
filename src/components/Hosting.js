import React, { Component } from 'react'
import HostingForm from './HostingForm'

class Hosting extends Component {
    render() {
        return(
            <div>
                <h4>予測概要入力</h4>
                <HostingForm sendHost={this.props.sendHost}/>
            </div>
        )
    }
}

export default Hosting