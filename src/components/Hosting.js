import React, { Component } from 'react'
import HostingForm from './HostingForm'

class Hosting extends Component {
    render() {
        return(
            <div>
                <div>予測概要入力</div>
                <HostingForm sendHost={this.props.sendHost}/>
            </div>
        )
    }
}

export default Hosting