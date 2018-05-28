import React from 'react';
function DailyItem(props) {

}
export default function Forecaster(props) {
    const {weekday, high, low, icon} = props;
  return (
    
        <section id="right">
            <div>
                <span>{props.weekday}</span>
                <span>{props.high}</span>
                <span>{props.low}</span>
                <span><img src="{props.icon}"/></span>
            </div>
            
        </section>
    
  )
}