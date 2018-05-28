import React from 'react';

export default function CityCondition(props) {
  const {city, weather, temp} = props;
  return (
    
        <section id="left">
            <div id='location'>{props.city}</div>
            <div id='weather'>{props.weather}</div>
            <div id='temperature'>{props.temp}</div>
        </section>
    
  )
}
