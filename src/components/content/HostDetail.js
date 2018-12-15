import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Moment from 'react-moment';
import Grid from '@material-ui/core/Grid';
import './Content.css';

class HostDetail extends Component {
    render() {
        return(
            <div className="card-box">
                <Card>
                    <div className="detail-card">
                        <p className="end-time">
                            投票終了時刻：
                            <Moment format="YYYY/MM/DD HH:mm">
                                {this.props.host.end.toNumber()}
                            </Moment>
                        </p>
                        <center className="head-text">投票概要</center>
                        <Grid container spacing={24}>
                            <Grid item xs={6}>
                                <p className="sub-text">予測対象商品：<strong>{this.props.host.title}</strong></p>
                                <p className="sub-text">商品概要</p><hr/>
                                {this.props.host.description}
                                <p className="sub-text">報酬について</p><hr/>
                                {this.props.host.reward}
                            </Grid>
                            <Grid item xs={6}>
                                <img
                                    src={this.props.host.image}
                                    alt=""
                                    className="host-image"
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </div>
        );
    }
}

export default HostDetail;