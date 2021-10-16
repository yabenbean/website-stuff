import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class EmissionsLinechart extends Component{

    render(){

        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2",
            title: {
                text: "Percent Change in Emissions From 1980 in the US (EPA)"
            },
            
            axisY:{
                title: "Percent",
                suffix: "%",
                interval: 25
            },
            axisX: {
                title: "Year",
                interval: 10
            },
            legend:{
                cursor: "pointer",
                verticalAlign: "top",
                horizontalAlign: "center",
                dockInsidePlotArea: false
            },
            toolTip:{
                shared: true
            },
            data: [
                {
                type: "line",
                toolTipContent: "{name} Emissions Changed: {y}%",
                name: "Carbon Monoxide",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: 0},
                    {x: 1990, y: -6},
                    {x: 2000, y: -19},
                    {x: 2010, y: -48},
                    {x: 2019, y: -75}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Emissions Changed: {y}%",
                name: "Lead",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: 0},
                    {x: 1990, y: -12},
                    {x: 2000, y: -23},
                    {x: 2010, y: -69},
                    {x: 2019, y: -99}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Emissions Changed: {y}%",
                name: "Nitrogen Oxides",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: 0},
                    {x: 1990, y: -3},
                    {x: 2000, y: -7},
                    {x: 2010, y: -26},
                    {x: 2019, y: -68}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Emissions Changed: {y}%",
                name: "Volatile Organic Compounds",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: 0},
                    {x: 1990, y: -12},
                    {x: 2000, y: -32},
                    {x: 2010, y: -41},
                    {x: 2019, y: -59}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Emissions Changed: {y}%",
                name: "PM10",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: 0},
                    {x: 1990, y: -33},
                    {x: 2000, y: -36},
                    {x: 2010, y: -46},
                    {x: 2019, y: -63}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Emissions Changed: {y}%",
                name: "PM2.5",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: null},
                    {x: 1990, y: 0},
                    {x: 2000, y: 7},
                    {x: 2010, y: -16},
                    {x: 2019, y: -36}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Emissions Changed: {y}%",
                name: "Sulfur Dioxide",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: 0},
                    {x: 1990, y: -1},
                    {x: 2000, y: -4},
                    {x: 2010, y: -19},
                    {x: 2019, y: -92}
                ]
            }
        ]
        }
        return(
            <div>
                <CanvasJSChart options = {options}/>
            </div>
        );

    }

    
    

}

export default EmissionsLinechart;