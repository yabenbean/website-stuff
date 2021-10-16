import React, {Component} from 'react';

import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class OpenWeatherMapHistorical extends Component{

    constructor(props){
        super(props);
        this.currentDate = new Date();
        this.prevDate = (new Date()).setDate(this.currentDate.getDate()-3);
        // this.url = "";
        this.key = '6e53e43c793da4d204db25502e48c33e';
        this.state = {
        pm10: [],
        pm25: [],
        o3: [],
        so2: [],
        no2: [],
        co: [],
        
        }
    }

    retrieveData(){
        let url = 'https://api.openweathermap.org/data/2.5/air_pollution/history?lat=34.0522&lon=-118.2437&start=' + Math.floor(this.prevDate/1000) + '&end=' + Math.floor(this.currentDate.getTime()/1000) + '&appid='
        fetch(url + this.key)
            .then((response) => response.json())
            .then(data => {
                let newPM10 = [];
                let newPM25 = [];
                let newO3 = [];
                let newSO2 = [];
                let newNO2 = [];
                let newCO = [];
                console.log(data)
                data.list.forEach(e => {
                   
                    newPM10.push({x: e.dt*1000, y: e.components.pm10});
                    newPM25.push({x: e.dt*1000, y: e.components.pm2_5});
                    newO3.push({x: e.dt*1000, y: e.components.o3});
                    newSO2.push({x: e.dt*1000, y: e.components.so2});
                    newNO2.push({x: e.dt*1000, y: e.components.no2});
                    newCO.push({x: e.dt*1000, y: e.components.co});
                });

                this.setState({
                    pm10: newPM10,
                    pm25: newPM25,
                    o3: newO3,
                    so2: newSO2,
                    no2: newNO2,
                    co: newCO
                });
               

                
            });

        
    }

    componentDidMount(){
        this.retrieveData();
        this.interval = setInterval(() => {
            this.currentDate = new Date();
            this.prevDate = (new Date()).setDate(this.currentDate.getDate()-3)
            this.retrieveData();
        }, 1000*60*60);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
    
    render(){
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2",
            title: {
                text: "Air Quality Measured in the Past 3 Days in General Los Angeles (OpenWeatherMap)"
            },
            axisX:{
                title: "Time",
                interval: 8,
                intervalType: "hour",
                valueFormatString: "MMM DD hh:mm TT K",
                labelAngel: -20,
                labelFontSize: 16,
            },
            axisY:{
                title: "Measured Level of Air Pollutant",
                interval: 25,
                labelFontSize: 12,
                tickLength: 20
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
            height: 800,
            
            data: [
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "PM10",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y} µg/m3",
                    dataPoints: this.state.pm10
                },
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "PM2.5",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y} µg/m3",
                    dataPoints: this.state.pm25
                },
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "O3",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y} µg/m3",
                    dataPoints: this.state.o3
                },
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "SO2",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y} µg/m3",
                    dataPoints: this.state.so2
                },
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "NO2",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y} µg/m3",
                    dataPoints: this.state.no2
                },
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "CO",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y} µg/m3",
                    dataPoints: this.state.co
                }
            ]
        }

        return(
            <div>
                <CanvasJSChart options={options}/>
            </div>
        );
        
    }



}

