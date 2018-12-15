import React, { Component } from 'react';
import './Result.css';

class CalcResult extends Component {
    constructor(props) {
        super(props)
        this.props.long == 0
        ? this.state ={sum: 0}
        : this.state ={sum: this.props.values.reduce(function(p, c) {return p + c;})}
    }

    render() {
        return(
            <center>
                {this.state.sum == 0
                ? <p className="average">投票なし</p>
                : <p className="average">平均値：{(this.state.sum / this.props.long).toFixed(2)}</p>
                }
            </center>
        )
    }
}

export default CalcResult