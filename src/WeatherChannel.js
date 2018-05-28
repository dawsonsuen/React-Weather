import React, {Component} from 'react';

import CityCondition from './CityCondition.js';
import Forecaster    from './Forecaster.js';

// responsible for maintain necessary data (from API response) in the state
// pass them down to child 
export default class WeatherChannel extends Component {
    constructor(props) {
        super(props);
        // use static data to fill initial state first
        this.state = {
            condition: {
                city:  'Brisbane, Australia',
                temp: '12c',
                weather: 'Clear'
            },
            days:  [
                {weekday: 'Wed', high:23, low:18, icon:'http://icons.wxug.com/i/c/k/clear.gif'},
                {weekday: 'Thu', high:29, low:18, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'},
                {weekday: 'Fri', high:20, low:10, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'}
            ]
        }
    }

    render() {
      return (
        <main>
        {/* <Toolbar /> */}

          <section id="left">
                
      {CityCondition(this.state.condition)}
        </section>
          <section id="right">
            {Forecaster(this.state.days)}
          </section>
        </main>
      )
    }
}
