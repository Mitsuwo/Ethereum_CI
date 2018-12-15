import React, { Component } from 'react';
import ViewTable from '../components/content/ViewTable';
import CalcResult from '../components/result/CalcResult';
import Histogram from '../components/result/Histogram';
import './Container.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

class ResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: this.props.votes.map((vote) => vote.value.toNumber()),
            long: this.props.votes.length,
        }
    }

    render() {
        const levels = this.props.votes.map((vote) => vote.level.toNumber());
        return (
            <div>
                <Card className="card">
                    <CardHeader title="投票結果" />
                    <CalcResult values={this.state.values} long={this.state.long}/>
                    <Histogram child={this.props.child} levels={levels}/>
                </Card>
                <ViewTable votes={this.props.votes} child={this.props.child}/>
            </div>
        )
    }
}

export default ResultsContainer