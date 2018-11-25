import React from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class VotingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault()
        console.log(this.state.value)
        console.log(this.props.Id)
        this.props.sendVote(this.state.value, this.props.hostId)
      }}>
        <div class='form-group'>
          <TextField
            type="text"
            id="value"
            value={this.state.value}
            onChange={this.handleChange}
            variant="outlined"
            label="予測数値を入力してください"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          {/* <div>
            <label>予測数値を入力してください</label>
            <input type="text" id="value" value={this.state.value} onChange={this.handleChange}/>
          </div> */}
          <div>
            <input type="hidden" value={this.props.hostId}/>
          </div>
        </div>
        <button type='submit' value='send'>投票</button>
        <hr />
      </form>
    )
  }
}

export default VotingForm