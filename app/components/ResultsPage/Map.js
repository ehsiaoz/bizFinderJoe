import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  render() {
    const mapContainer = <div style={{height: '100%', width:'100%'}}></div>

    console.log("this.props.markers", this.props.markers)

    const markers = this.props.markers.map((biz, i) => {

        const marker = {
            position: {
              lat: biz.location.lat,
              lng: biz.location.lng
            }
        }
        return <Marker key={i} {...marker} />
    })

    console.log("markers", markers)

    return (

      <div style={{width:"100%", height:800, background: 'red'}}>
      <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap
            defaultZoom={14}
            defaultCenter={this.props.center}
            options={{streetViewControl: false, mapTypeControl: false}}>
            { markers }
          </GoogleMap>
        } />
      </div>
    )
  }
}

export {Map};
