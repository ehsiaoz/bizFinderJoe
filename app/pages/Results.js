import * as React from 'react';
import * as axios from 'axios';
import { BizList } from '../components/ResultsPage/BizList';
import { Map } from '../components/ResultsPage/Map';
import { H1 } from '../components/Layout/H1';
import { Breadcrumbs } from '../components/Layout/Breadcrumbs';

class Results extends React.Component {

  constructor(props) {
     super(props);
     this.state ={
       city: '',
       category: '',
       categoryValue: '',
       mapCenter: {},
       businesses: [],
       markers: []
     }
  }

  componentWillMount () {
    this.getParams();

  }

  componentDidMount () {
    this.setMapCenter()
  }

  getParams () {

    this.setState({
      city: this.props.location.query.city,
      category: this.props.location.query.category
    })
  }


  setParent(newBusinesses) {
    this.setState({
      businesses: newBusinesses
    });
    this.setMapMarkers(this.state.businesses);

  }

  setMapMarkers(businesses) {
    // businesses.map((item, i) => {

    var markers = businesses.map((item, i) => {
      return {location: {
                  lat: item.location.lat,
                  lng: item.location.lng}
              }
    })
    this.setState({
      markers: markers
    })
  }

  setMapCenter() {
    let self = this;
    var city = this.state.city;
    var path_url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=AIzaSyB2YjPzqYIuEbcLnKcE27KwdJyNDqd0cPE'
    axios.get(path_url)
    .then(function (response) {

      const lat = parseFloat(response.data.results[0].geometry.location.lat);
      const lng = parseFloat(response.data.results[0].geometry.location.lng);
      console.log('parselat', lat);
      console.log('parselng', lng);
      const center = {
          lat: lat,
          lng: lng
        };
      console.log('center', center);
      self.setState({
        mapCenter: center
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    console.log('mapCenter in render', this.state.mapCenter);
    return (
      <div>
        <Breadcrumbs />
        <H1 city={this.state.city} category={this.state.category} />
        <div className="row">
          <div className="col-md-5">
            <div style={{width:"100%", height:800}}>
              <Map center={this.state.mapCenter} markers={this.state.markers} />
            </div>
          </div>
          <div className="col-md-7">
            <BizList city={this.state.city} category={this.state.category} setParent={this.setParent.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export { Results };
