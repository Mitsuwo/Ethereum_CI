import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import { withRouter } from 'react-router-dom';

class VotingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const min = this.props.child.min;
    const levelRange = this.props.child.levelRange;
    const levelOne = min + levelRange/2;
    const levelTwo = levelOne + levelRange;
    const levelThree = levelTwo + levelRange;
    const levelFour = levelThree + levelRange;
    const levelFive = levelFour + levelRange;
    const levelSix = levelFive + levelRange;
    const levelSeven = levelSix + levelRange;
    const levelEight = levelSeven + levelRange;
    const levelNine = levelEight + levelRange;
    const levelTen = levelNine + levelRange;
    return (
      <div style={style.card}>
        <Card>
          <form onSubmit={e => {
            e.preventDefault()
            if (this.state.value == 1) {
              this.props.child.sendVote(1, levelOne, this.props.child.hostId);
            } else if (this.state.value == 2) {
              this.props.child.sendVote(2, levelTwo, this.props.child.hostId);
            } else if (this.state.value == 3) {
              this.props.child.sendVote(3, levelThree, this.props.child.hostId);
            } else if (this.state.value == 4) {
              this.props.child.sendVote(4, levelFour, this.props.child.hostId);
            } else if (this.state.value == 5) {
              this.props.child.sendVote(5, levelFive, this.props.child.hostId);
            } else if (this.state.value == 6) {
              this.props.child.sendVote(6, levelSix, this.props.child.hostId);
            } else if (this.state.value == 7) {
              this.props.child.sendVote(7, levelSeven, this.props.child.hostId);
            } else if (this.state.value == 8) {
              this.props.child.sendVote(8, levelEight, this.props.child.hostId);
            } else if (this.state.value == 9) {
              this.props.child.sendVote(9, levelNine, this.props.child.hostId);
            } else if (this.state.value == 10) {
              this.props.child.sendVote(10, levelTen, this.props.child.hostId);
            } 
            this.setState({
              value: null,
            });
            this.props.history.push(`/host/${this.props.child.hostId}`);
          }}>
            <div className='form-group'>
              <FormControl variant="outlined" fullWidth>
                <InputLabel
                  htmlFor="outlined-age-simple"
                >
                  予測区間を選択してください
                </InputLabel>
                <Select
                  value={this.state.value}
                  onChange={this.handleChange}
                  input={
                    <OutlinedInput
                      name="value"
                      id="outlined-age-simple"
                    />
                  }
                >
                  <MenuItem value={1}>{this.props.child.rangeOne}</MenuItem>
                  <MenuItem value={2}>{this.props.child.rangeTwo}</MenuItem>
                  <MenuItem value={3}>{this.props.child.rangeThree}</MenuItem>
                  <MenuItem value={4}>{this.props.child.rangeFour}</MenuItem>
                  <MenuItem value={5}>{this.props.child.rangeFive}</MenuItem>
                  <MenuItem value={6}>{this.props.child.rangeSix}</MenuItem>
                  <MenuItem value={7}>{this.props.child.rangeSeven}</MenuItem>
                  <MenuItem value={8}>{this.props.child.rangeEight}</MenuItem>
                  <MenuItem value={9}>{this.props.child.rangeNine}</MenuItem>
                  <MenuItem value={10}>{this.props.child.rangeTen}</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button size='large' variant="outlined" type='submit' value='send'>投票</Button>
          </form>
        </Card>
      </div>
    );
  }
}

const style = {
  card: {
    margin: 30,
  },
}

export default withRouter(VotingForm);