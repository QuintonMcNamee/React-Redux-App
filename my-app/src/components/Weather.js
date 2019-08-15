import React from 'react';

const Weather = props => {
  console.log(props.weather.name)
  return (
    <div>
      <h4>{props.weather.name}</h4>
    </div>
  )
}

export default Weather
