import React, {Component} from 'react';

import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class LincolnHeightsHistorical extends Component{

    constructor(props){
        super(props);
        this.currentDate = new Date();
        this.prevTime = (new Date()).setDate(this.currentDate.getDate()-3);
        this.prevDate = new Date(this.prevTime);
        this.state = {
        pm10: [],
        pm25: [],
        pm1: []
        }
    }

    retrieveData(){
        let url = 'https://docs.openaq.org/v2/measurements?date_from=' + this.prevDate.toISOString() + '&date_to=' + this.currentDate.toISOString() +'&limit=400&page=1&offset=0&sort=desc&unit=%C2%B5g%2Fm%C2%B3&radius=1000&location_id=64868&order_by=datetime';
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                let newData = data.results.reverse();
                let newPM10 = [];
                let newPM25 = [];
                let newPM1 = [];
                newData.forEach(e => {
                   
                    if(e.parameter === "pm10"){
                        newPM10.push({x: Date.parse(e.date.local), y: e.value});
                    }else if(e.parameter === "pm25"){
                        newPM25.push({x: Date.parse(e.date.local), y: e.value});
                    }else{
                       newPM1.push({x: Date.parse(e.date.local), y: e.value});
                    }

                    
                });

                this.setState({
                    pm10: newPM10,
                    pm25: newPM25,
                    pm1: newPM1
                });
               

                
            });

        
    }

    componentDidMount(){
        this.retrieveData();
        this.interval = setInterval(() => {
            this.currentDate = new Date();
            this.prevTime = (new Date()).setDate(this.currentDate.getDate()-3);
            this.prevDate = new Date(this.prevTime);
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
                text: "Air Quality Trends in Los Angeles (3rd and Broadway) (OpenAQ)"
            },
            axisX:{
                title: "Time",
                interval: 50,
                intervalType: "minute",
                valueFormatString: "MMM DD hh:mm TT K",
                labelAngel: -20,
                labelFontSize: 11,
            },
            axisY:{
                title: "Measured Level of Air Pollutant",
                interval:10,
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
            height: 600,
            
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
                    name: "PM1",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y} µg/m3",
                    dataPoints: this.state.pm1
                }, 
            ]
        }

        return(
            <div>
                <CanvasJSChart options={options}/>
            </div>
        );
        
    }



}

