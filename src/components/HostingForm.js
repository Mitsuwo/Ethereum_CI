import React, { Component } from 'react'

class HostingForm extends Component {
    render() {
        return(
            <form onSubmit={e => {
                e.preventDefault()
                console.log(this.state.value)
                console.log(this.state.hostId)
                this.props.sendVote(this.state.value, this.state.hostId)
            }}>
            <div class='form-group'>
                <div>
                    <label>予測数値を入力してください</label>
                    <input type="text" id="value" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>ホストID</label>
                    <input type="text" id="hostId" value={this.state.hostId} onChange={this.handleChange}/>
                </div>
            </div>
            <button type='submit' value='send'>投票</button>
            <hr />
            </form>
        )
    }
}