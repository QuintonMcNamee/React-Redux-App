import React from 'react';

const Weather = props => {
  return (
    <div>
      <h4>{props.weather.title}</h4>
      <h6>{props.weather.location_type}</h6>
    </div>
  )
}

export default Weather
