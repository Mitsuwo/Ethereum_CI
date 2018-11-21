import React, { Component } from 'react'
import ViewTable from './ViewTable'
import VotingForm from './VotingForm'

class Content extends Component {
  render() {
    return (
      <div>
        <h4>投票結果</h4>
        <ViewTable votes={this.props.votes} />
        <hr/>
        <h4>投票概要</h4>
        {this.props.hosts.map((host) => {
          return(
            <div>
              <tr>
                <td>{host.id.toNumber()}/</td>
                <td>{host.sender}</td>
              </tr>
              <tr>
                <td>{host.title}/</td>
                <td>{host.description}/</td>
                <td>{host.reward}</td>
              </tr>
            </div>
          )
        })}
        <hr/>
        <VotingForm
          votes={this.props.votes}
          sendVote={this.props.sendVote}
          account={this.props.account}
        />
        <h4>あなたのアカウント: {this.props.account}</h4>
      </div>
    )
  }
}

export default Content
