import React, { Component } from 'react';
import HostingForm from './HostingForm';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components'

class Hosting extends Component {
    render() {
        return(
            <div style={style.card}>
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

const style = {
    card: {
        margin: 'auto',
        paddingTop: 100,
        maxWidth: 800,
    },
}

export default Hosting;