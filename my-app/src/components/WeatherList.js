import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Weather from './Weather';

const WeatherList = props => {
  return (
    <>
      <h1>Welcome to the weather</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader
           type="Plane"
           color="#00BFFF"
           height="100"
           width="100"
          /> ) : (
            'Get Weather Data'
          )}
      </button>
      {props.weathers &&
        props.weathers.map(item => <Weather key={item.name} weather={item} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    weathers: state.weathers
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(WeatherList);
