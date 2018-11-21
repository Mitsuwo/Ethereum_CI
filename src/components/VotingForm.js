import React from 'react'
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class VotingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      hostId: '',
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
          {/* <select ref={(input) => this.candidateId = input} class='form-control'>
            {this.props.candidates.map((candidate) => {
              return <option value={candidate.id}>{candidate.name}</option>
            })}
          </select> */}
        </div>
        <button type='submit' value='send'>投票</button>
        <hr />
      </form>
    )
  }
}

export default VotingForm