import React from 'react';
function DailyItem(props) {
    const day=props.day;
    // const {weekday, high, low} = props;

    return(
        <div className='item'>
            <span>{day.weekday}</span>
            <span><img src={day.icon}/></span>
            <span>{day.high}</span>
            <span>{day.low}</span>

        </div>
    )
}
export default function Forecaster(props) {
  return props.days.map(
    
        (day,i)=><DailyItem day={day}/>
    
  )

}