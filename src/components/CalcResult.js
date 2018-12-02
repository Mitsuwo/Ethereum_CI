import React, { Component } from 'react'

class CalcResult extends Component {
    constructor(props) {
        super(props)
        this.props.long == 0
        ? this.state ={sum: 0}
        : this.state ={sum: this.props.values.reduce(function(p, c) {return p + c;})}
    }

    render() {
        return(
            <div>
                {this.state.sum == 0
                ? <h4>投票なし</h4>
                : <h4>平均値：{(this.state.sum / this.props.long).toFixed(2)}</h4>
                }
                <hr/>
            </div>
        )
    }
}

export default CalcResult