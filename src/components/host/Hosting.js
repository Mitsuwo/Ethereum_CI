import React, { Component } from 'react';
import HostingForm from './HostingForm';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import './Host.css';

class Hosting extends Component {
    render() {
        return(
            <div className="host-card">
                <Card>
                    <CardHeader title="予測概要入力" />
                    <CardContent>
                        <HostingForm sendHost={this.props.sendHost}/>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Hosting;