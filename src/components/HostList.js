import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import { NavLink } from 'react-router-dom'

class HostList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h4>予測一覧</h4>
        <List component="nav">
          {this.props.hosts.map((host) => {
            return(
              <div key={host.id}>
              <NavLink to={'/hostlist/' + host.id.toNumber()} hosts={this.props.hosts}>
              <Card>
                <ListItem button>
                  <ListItemText primary={host.title} secondary={host.sender}/>
                </ListItem>
              </Card>
              </NavLink>
              </div>
            )
          })}
        </List>
        <hr/>
      </div>
    )
  }
}

export default HostList
