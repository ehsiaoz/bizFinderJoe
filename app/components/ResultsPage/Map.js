import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  render() {
    const mapContainer = <div style={{height: '100%', width:'100%'}}></div>



    const markers = this.props.markers.map((biz, i) => {

        const marker = {
            position: {
              lat: biz.location.lat,
              lng: biz.location.lng
            }
        }
        return <Marker key={i} {...marker} />
    })



    return (

      <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap
            defaultZoom={14}
            center={this.props.center}
            options={{streetViewControl: false, mapTypeControl: false}}>
            { markers }
          </GoogleMap>
        } />

    )
  }
}

export {Map};
