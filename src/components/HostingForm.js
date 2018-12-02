import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
            <div className='form-group'>
                <FormControl fullWidth>
                    <TextField
                        type="text"
                        id="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        variant="outlined"
                        label="タイトル"
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        type="text"
                        id="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        variant="outlined"
                        label="予測概要"
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        type="text"
                        id="reward"
                        value={this.state.reward}
                        onChange={this.handleChange}
                        variant="outlined"
                        label="報酬設定"
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        type="text"
                        id="biddingTime"
                        value={this.state.biddingTime}
                        onChange={this.handleChange}
                        variant="outlined"
                        label="予測期間"
                    />
                </FormControl>
            </div>
            <Button size='large' variant="outlined" type='submit' value='send'>予測開始</Button>
            </form>
        )
    }
}

export default HostingForm