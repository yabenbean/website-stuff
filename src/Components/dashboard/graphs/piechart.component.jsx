import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PieChart extends Component {
	constructor(props){
		super(props);
	}
	
	render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: this.props.title
			},
			
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: this.props.dataPoints
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default PieChart;