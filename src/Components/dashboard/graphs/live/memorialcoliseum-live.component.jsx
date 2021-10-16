import React, {Component} from 'react';

import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class MemorialColiseumLive extends Component{

    constructor(props){
        super(props);
        this.currentDate = new Date();
        this.prevTime = (new Date()).setDate(this.currentDate.getDate() - 1);
        this.prevDate = new Date(this.prevTime);
        this.state = {
            pm1: 0,
            pm25: 0,
            pm10: 0
        }
    }

    retrieveData(){
        let url = 'https://docs.openaq.org/v2/measurements?date_from=' + this.prevDate.toISOString() + '&date_to=' + this.currentDate.toISOString() +'&limit=3&page=1&offset=0&sort=desc&unit=%C2%B5g%2Fm%C2%B3&radius=1000&location_id=219448&order_by=datetime';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(e => {
                    if(e.parameter == "pm10"){
                        this.setState({
                            pm10: e.value
                        })
                    }else if(e.parameter == "pm25"){
                        this.setState({
                            pm25: e.value
                        })
                    }else{
                        this.setState({
                            pm1: e.value
                        })
                    }
                });
                
            })
            
    }

    componentDidMount(){
        this.retrieveData();
        this.interval = setInterval(() => {
            this.currentDate = new Date();
            this.prevTime = (new Date()).setDate(this.currentDate.getDate() - 1);
            this.prevDate = new Date(this.prevTime);
            this.retrieveData()
        }, 1000*60);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const options = {
            title: {
                text:"Current Air Quality Measured in Los Angeles (Memorial Coliseum) (OpenAQ)"
            },
            data: [
                {
                    type: "column",
                    yValueFormatString: "#,##0.00 µg/m3",
                    indexLabel: "{y}",
                    dataPoints: [
                        {label: "PM2.5", y: this.state.pm25},
                        {label: "PM10", y: this.state.pm10},
                        {label: "PM1", y: this.state.pm1}
                        
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