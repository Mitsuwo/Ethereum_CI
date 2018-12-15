import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment'

class HostDetail extends Component {
    render() {
        return(
            <div style={style.card}>
                <Card>
                    <CardHeader
                        title={this.props.host.title}
                        subheader={this.props.host.sender}
                    />
                    <CardContent>
                        <Typography>
                            <h4>投票概要</h4>
                            {this.props.host.description}
                        </Typography>
                        <Typography>
                            <h4>報酬設計</h4>
                            {this.props.host.reward}
                        </Typography>
                        <Typography>
                            <h4>投票終了時刻</h4>
                            <Moment format="YYYY/MM/DD HH:mm">{this.props.host.end.toNumber()}</Moment>
                            {this.props.host.end.toNumber()}
                        </Typography>
                        <Typography>
                            <h4>最低値</h4>
                            {this.props.host.minValue.toNumber()}
                        </Typography>
                        <Typography>
                            <h4>最高値</h4>
                            {this.props.host.maxValue.toNumber()}
                        </Typography>
                    </CardContent>
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

export default HostDetail