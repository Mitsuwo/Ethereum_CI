import React, { Component } from 'react'
import ViewTable from './ViewTable'
import VotingForm from './VotingForm'

class Content extends Component {
  render() {
    return (
      <div>
        <ViewTable candidates={this.props.candidates} />
        <hr/>
        { !this.props.hasVoted ?
          <VotingForm
            candidates={this.props.candidates}
            castVote={this.props.castVote}
            account={this.props.account}
          />
          : null
        }
        <p>アカウント: {this.props.account}</p>
      </div>
    )
  }
}

export default Content
