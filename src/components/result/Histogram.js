var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Histogram extends Component {
    constructor(props) {
		super(props);
		this.renderLevel = this.renderLevel.bind(this);
	}

	renderLevel(level) {
		var num = 0;
        for (var i = 0;  i < this.props.levels.length; i++) {
            if(this.props.levels[i] == level){
                num++;
            }
		}
		return num;
    }

	render() {
		const options = {
			title: {
				text: "投票の分布"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: this.props.child.rangeOne, y: this.renderLevel(1) },
					{ label: this.props.child.rangeTwo, y: this.renderLevel(2) },
					{ label: this.props.child.rangeThree, y: this.renderLevel(3) },
					{ label: this.props.child.rangeFour,  y: this.renderLevel(4) },
                    { label: this.props.child.rangeFive,  y: this.renderLevel(5) },
                    { label: this.props.child.rangeSix,  y: this.renderLevel(6) },
                    { label: this.props.child.rangeSeven,  y: this.renderLevel(7) },
                    { label: this.props.child.rangeEight,  y: this.renderLevel(8) },
                    { label: this.props.child.rangeNine,  y: this.renderLevel(9) },
                    { label: this.props.child.rangeTen,  y: this.renderLevel(10) },
				]
			}
			]
		}
		return (
		<div style={style.histogram}>
            <CanvasJSChart 
                options = {options}
				// onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

const style = {
    histogram: {
        margin: 30,
    }
}

module.exports = Histogram;      