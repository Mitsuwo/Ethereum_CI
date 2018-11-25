import React, { Component } from 'react'

class HostingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          reward: '',
          biddingTime: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return(
            <form onSubmit={e => {
                e.preventDefault()
                console.log(this.state)
                this.props.sendHost(this.state.title, this.state.description, this.state.reward, this.state.biddingTime)
            }}>
            <div class='form-group'>
                <div>
                    <label>タイトル</label>
                    <input type="text" id="title" value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>予測概要</label>
                    <input type="text" id="description" value={this.state.description} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>報酬設定</label>
                    <input type="text" id="reward" value={this.state.reward} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>期限</label>
                    <input type="text" id="biddingTime" value={this.state.biddingTime} onChange={this.handleChange}/>
                </div>
            </div>
            <button type='submit' value='send'>予測開始</button>
            <hr />
            </form>
        )
    }
}

export default HostingForm