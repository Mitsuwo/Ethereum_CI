import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class HostDetail extends Component {
    render() {
        return(
            <Card>
                <CardHeader
                    title={this.props.host[2]}
                    subheader={this.props.host[1]}
                />
                <CardContent>
                    <Typography>
                        {this.props.host[3]}
                    </Typography>
                    <Typography>
                            {this.props.host[4]}
                        </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default HostDetail