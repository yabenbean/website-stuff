import React, {Component} from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

require('dotenv').config()

export default class OpenWeatherMapLive extends Component{

    constructor(props){
        super(props);
        this.url = "https://api.openweathermap.org/data/2.5/air_pollution?lat=34.0522&lon=-118.2437&appid=";
        this.key = '6e53e43c793da4d204db25502e48c33e';
        this.state={
            pm25:0,
            pm10:0,
            o3:0,
            so2:0,
            co:0,
            no2:0
        }
    }

    retrieveData(){
        fetch(this.url + this.key)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    pm25: data.list[0].components.pm2_5,
                    pm10: data.list[0].components.pm10,
                    o3: data.list[0].components.o3,
                    so2: data.list[0].components.so2,
                    no2: data.list[0].components.no2,
                    co: data.list[0].components.co
                })
            })

        
    }

    componentDidMount(){
        this.retrieveData();
        this.interval = setInterval(() => {
            this.retrieveData();
            console.log("Refreshing live data...")
        }, 1000*60*60);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const options = {
            title: {
                text:"Current Air Quality Measured in General Los Angeles (OpenWeatherMap)"
            },
            data: [
                {
                    type: "column",
                    yValueFormatString: "#,##0.00 µg/m3",
                    indexLabel: "{y}",
                    dataPoints: [
                        {label: "PM2.5", y: this.state.pm25},
                        {label: "PM10", y: this.state.pm10},
                        {label: "O3", y: this.state.o3},
                        {label: "CO", y: this.state.co},
                        {label: "NO2", y: this.state.no2},
                        {label: "SO2", y: this.state.so2},
                    ]
                }
            ]

            
        }

        return(
            <div>
                <CanvasJSChart options={options}/>
            </div>
        )
    }
}