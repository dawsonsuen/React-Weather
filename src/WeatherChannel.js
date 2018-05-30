import React, {Component} from 'react';

import CityCondition from './CityCondition.js';
import Forecaster    from './Forecaster.js';
import {fetchConditionData, fetchForecast} from './api/weather';
// responsible for maintain necessary data (from API response) in the state
// pass them down to child 
export default class WeatherChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curCity:'Melbourne',
            conditionData:{},

            forecast:  [
                {weekday: 'Wed', high:23, low:18, icon:'http://icons.wxug.com/i/c/k/clear.gif'},
                {weekday: 'Thu', high:29, low:18, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'},
                {weekday: 'Fri', high:20, low:10, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'}
            ]
        }
    }
    handleConditionData(data){
        const conditionData={
            city:data.display_location.full,
            weather:data.weather,
            temp:data.temp_c
        }
        this.setState({conditionData});
    }
    onSubmit(){
        alert('clicked');
        fetchConditionData(this.state.curCity,(data)=>this.handleConditionData);
    }
    componentDidMount(){
        fetchConditionData(this.state.curCity,(data)=>{this.handleConditionData(data)});
        fetchForecast(this.state.curCity,(data)=>{this.handleForecastData(data)});
    }
    render() {
        const{city,weather,temp}=this.state.conditionData;
      return (
        <main>
        {/* <Toolbar /> */}
        <nav style={{padding:10}}>
            <input value={this.state.curCity}
                onChange={(e)=>this.setState({curCity:e.target.value})}/>
            <button onClick={()=>{this.onSubmit()}}>Load</button>
        </nav> 
          <section id="left">
                
      <CityCondition
      city={city}
      weather={weather}
      temp={temp}/>
        </section>
          <section id="right">
            {/* {Forecaster(this.state.days)} */}
            <Forecaster days={this.state.forecast}/>
          </section>
        </main>
      )
    }
}
