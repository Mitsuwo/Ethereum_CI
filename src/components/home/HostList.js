import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import { NavLink } from 'react-router-dom';
import './Home.css';

class HostList extends Component {
  render() {
    return (
      <div>
        <p className="home-title">予測一覧</p>
        <List component="nav">
          {this.props.hosts.map((host) => {
            return(
              <div key={host.id} className="host-list">
                <NavLink to={'host/' + host.id.toNumber()} hosts={this.props.hosts} votes={this.props.votes}>
                  <Card>
                    <ListItem>
                      <ListItemText primary={host.title} secondary={host.sender}/>
                    </ListItem>
                  </Card>
                </NavLink>
              </div>
            )
          })}
        </List>
      </div>
    )
  }
}

export default HostList
