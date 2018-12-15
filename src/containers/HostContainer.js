import React, { Component } from 'react';
import VotingForm from '../components/vote/VotingForm';
import ResultsContainer from './ResultsContainer';
import HostDetail from '../components/HostDetail';

class HostContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.match.params.id,
            votes: this.props.votes.filter((vote) => {
                return vote.hostId == this.props.match.match.params.id
            }),
            host: this.props.hosts[this.props.match.match.params.id - 1],
        }
    }

    render() {
        const min = this.state.host.minValue.toNumber();
        const max = this.state.host.maxValue.toNumber();
        const levelRange = (max - min)/10;
        const rangeOne = `${min} - ${min + levelRange}`
        const rangeTwo = `${min + levelRange + 1} - ${min + levelRange * 2}`
        const rangeThree = `${min + levelRange * 2 + 1} - ${min + levelRange * 3}`
        const rangeFour = `${min + levelRange * 3 + 1} - ${min + levelRange * 4}`
        const rangeFive = `${min + levelRange * 4 + 1} - ${min + levelRange * 5}`
        const rangeSix = `${min + levelRange * 5 + 1} - ${min + levelRange * 6}`
        const rangeSeven = `${min + levelRange * 6 + 1} - ${min + levelRange * 7}`
        const rangeEight = `${min + levelRange * 7 + 1} - ${min + levelRange * 8}`
        const rangeNine = `${min + levelRange * 8 + 1} - ${min + levelRange * 9}`
        const rangeTen = `${min + levelRange * 9 + 1} - ${min + levelRange * 10}`
        const child = {
            sendVote: this.props.sendVote,
            hostId:this.state.id,
            host: this.state.host,
            min: min,
            levelRange: levelRange,
            rangeOne: rangeOne,
            rangeTwo: rangeTwo,
            rangeThree: rangeThree,
            rangeFour: rangeFour,
            rangeFive: rangeFive,
            rangeSix: rangeSix,
            rangeSeven: rangeSeven,
            rangeEight: rangeEight,
            rangeNine: rangeNine,
            rangeTen: rangeTen,
            votes: this.state.votes,
        }
        return(
            <div>
                <HostDetail host={this.state.host} remount={this.props.remount}/>
                <VotingForm child={child}/>
                <ResultsContainer votes={this.state.votes} child={child}/>
            </div>
        )
    }
}

export default HostContainer