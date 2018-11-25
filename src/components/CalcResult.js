import React, { Component } from 'react'

class CalcResult extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let arr = this.props.filtered_votes;
        let values = arr.map((vote) => vote.value.toNumber())
        let sum = values.reduce(function(p, c) {
            return p + c;
        });
        let ave = sum / arr.length
        return(
            <div>
                <h4>平均値：{ave.toFixed(2)}</h4>
                <hr/>
            </div>
        )
    }
}

export default CalcResult