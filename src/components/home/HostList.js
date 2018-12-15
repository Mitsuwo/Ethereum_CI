import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { NavLink } from 'react-router-dom';
import './Home.css';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader } from '@material-ui/core';

class HostList extends Component {
  render() {
    return (
      <div>
        <p className="home-title">予測一覧</p>
        <div className="container">
          {this.props.hosts.map((host) => {
            return(
              <div key={host.id} className="host-list">
                <NavLink to={'host/' + host.id.toNumber()} hosts={this.props.hosts} votes={this.props.votes}>
                  <Card>
                    <div className="card-content">
                      <CardHeader title={host.title} subheader={host.sender}/>
                      <CardMedia
                        component="img"
                        alt={host.title}
                        className="card-image"
                        image={host.image}
                        title={host.title}
                      />
                    </div>
                  </Card>
                </NavLink>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default HostList
