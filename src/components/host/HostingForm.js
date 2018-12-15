import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class HostingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          image: '',
          reward: '',
          biddingTime: '',
          minValue: '',
          maxValue: '',
        };
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
                this.props.sendHost(
                    this.state.title,
                    this.state.description,
                    this.state.image,
                    this.state.reward,
                    this.state.biddingTime,
                    this.state.minValue,
                    this.state.maxValue,
                );
            }}>
                <div className='form-group'>
                    <FormControl fullWidth>
                        <TextField
                            type="text"
                            id="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            margin="normal"
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
                            margin="normal"
                            variant="outlined"
                            label="予測概要"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            type="text"
                            id="image"
                            value={this.state.image}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            label="画像URL"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            type="text"
                            id="reward"
                            value={this.state.reward}
                            onChange={this.handleChange}
                            margin="normal"
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
                            margin="normal"
                            variant="outlined"
                            label="予測期間"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            type="text"
                            id="minValue"
                            value={this.state.minValue}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            label="予測区間最低値"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            type="text"
                            id="maxValue"
                            value={this.state.maxValue}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            label="予測区間最高値"
                        />
                    </FormControl>
                </div>
                <Button
                    size='large'
                    variant="contained"
                    type='submit'
                    value='send'
                    fullWidth
                >
                    予測開始
                </Button>
            </form>
        );
    }
}

export default HostingForm