import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AirQualityLineChart extends Component{

    render(){

        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2",
            title: {
                text: "Percent Change in Air Quality From 1980 in the US (EPA)"
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
                shared: true,
            },
            data: [
                {
                type: "line",
                toolTipContent: "{name} Air Quality Changed: {y}%",
                name: "Carbon Monoxide",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: 0},
                    {x: 1990, y: -9},
                    {x: 2000, y: -20},
                    {x: 2010, y: -62},
                    {x: 2019, y: -85}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Air Quality Changed: {y}%",
                name: "Lead",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: 0},
                    {x: 1990, y: 0},
                    {x: 2000, y: -5},
                    {x: 2010, y: -8},
                    {x: 2019, y: -98}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Air Quality Changed: {y}%",
                name: "Nitrogen Dioxide",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: 0},
                    {x: 1990, y: -6},
                    {x: 2000, y: -14},
                    {x: 2010, y: -40},
                    {x: 2019, y: -65}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Air Quality Changed: {y}%",
                name: "Ozone",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: 0},
                    {x: 1990, y: -10},
                    {x: 2000, y: -14},
                    {x: 2010, y: -25},
                    {x: 2019, y: -35}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Air Quality Changed: {y}%",
                name: "PM10",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: null},
                    {x: 1990, y: 0},
                    {x: 2000, y: 0},
                    {x: 2010, y: -29},
                    {x: 2019, y: -46}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Air Quality Changed: {y}%",
                name: "PM2.5",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: null},
                    {x: 1990, y: null},
                    {x: 2000, y: 0},
                    {x: 2010, y: -20},
                    {x: 2019, y: -43}
                ]
            },
            {
                type: "line",
                toolTipContent: "{name} Air Quality Changed: {y}%",
                name: "Sulfur Dioxide",
                showInLegend: true,
                dataPoints: [
                    {x: 1980, y: 0},
                    {x: 1990, y: -2},
                    {x: 2000, y: -10},
                    {x: 2010, y: -21},
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
export default AirQualityLineChart;