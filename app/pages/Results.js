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
       mapCenter: {
         lat: 41.8920457,
         lng: -87.6472265
       },
       businesses: [],
       markers: []
     }
  }

  componentWillMount () {
    this.getParams();
    this.getCategoryValue()
  }

  getParams () {
    console.log("getParamsFunction")
    this.setState({
      city: this.props.location.query.city,
      category: this.props.location.query.category
    })
  }

  getCategoryValue() {

    let self = this;
    var category = this.props.location.query.category;
    console.log("category inside getCategoryValue", category);
    axios.get('/api/categories', {
      params: {
        category: this.props.location.query.category
      }
    })
    .then((response) => {
      console.log('response from axios get', response.data);

      self.setState({
        businesses: response.data,
      });
    })
    .catch((error) => {
      console.log('error', error);

    });
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

  render() {
    console.log('this.state.markers: ', this.state.markers);
    console.log("category in results", this.state.category);
  //  let {setParent, appstate} = this.props;
    return (
      <div>
        <Breadcrumbs />
        <H1 />
        <div className="row">
          <div className="col-md-5">
            <div style={{width:"100%", height:800, background: 'red'}}>
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
