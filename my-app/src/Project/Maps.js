import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const location ={
  address: 'Aarogya Prakash Clinic, C-Block, Dilshad Garden, Delhi:95',
  lat : 28.680350,
  lng : 77.309906 
}

export class Maps extends React.Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "200px",
    };
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: 9.761927, lng: 79.95244 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCYnXWjJTpQUYdJPd_mzVAMBD0htRl6Cwc'
})(Maps);