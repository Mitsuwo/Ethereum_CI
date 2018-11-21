import React, { Component } from 'react'
import ViewTable from './ViewTable'
import VotingForm from './VotingForm'

class Content extends Component {
  render() {
    return (
      <div>
        {/* <h4>投票結果</h4>
        <ViewTable candidates={this.props.candidates} />
        <hr/>
        <h4>投票概要</h4>
        {this.props.hosts.map((host) => {
          return(
            <tr>
              <td>{host.hostDescription}</td>
            </tr>
          )
        })} */}
        <hr/>
        <VotingForm
          candidates={this.props.candidates}
          sendVote={this.props.sendVote}
          account={this.props.account}
        />
        <h4>あなたのアカウント: {this.props.account}</h4>
      </div>
    )
  }
}

export default Content
