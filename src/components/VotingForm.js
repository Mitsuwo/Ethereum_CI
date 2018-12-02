import React from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
        <div className='form-group'>
          <FormControl fullWidth>
            <TextField
              type="text"
              id="value"
              value={this.state.value}
              onChange={this.handleChange}
              variant="outlined"
              label="予測数値を入力してください"
              InputProps={{
                endAdornment: <InputAdornment position="start">個</InputAdornment>,
              }}
            />
          </FormControl>
          <div>
            <input type="hidden" value={this.props.hostId}/>
          </div>
        </div>
        <Button size='large' variant="outlined" type='submit' value='send'>投票</Button>
        <hr />
      </form>
    )
  }
}

export default VotingForm