import * as React from 'react';
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
       mapCenter: {
         lat: 40.75,
         lng: -73.98
       },
       businesses: [],
       markers: [
         {
           location: {
             lat: 40.7599,
             lng: -73.9803
           }
         },
         {
           location: {
             lat: 40.7651,
             lng: -73.9799
           }
         },
         {
           location: {
             lat: 40.7505,
             lng: -73.9934
           }
         }
       ]
     }
  }

  componentWillMount () {
    this.getParams()
  }

  getParams () {
    this.setState({
      city: this.props.location.query.city,
      category: this.props.location.query.category
    })
  }

  setParent(newBusinesses) {
    console.log("newBusinesses in setParent", newBusinesses);
    this.setState({
      businesses: newBusinesses
    });
    console.log("this.state.businesses after returned from child", this.state.businesses);
  }

  render() {

    console.log('this.props Results', this.props)
    console.log("city in results ", this.state.city);
    console.log("category in results", this.state.category);
  //  let {setParent, appstate} = this.props;
    return (
      <div>
        <Breadcrumbs />
        <H1 />
        <div className="row">
          <div className="col-md-5">
            <div style={{width:400, height:800, background: 'red'}}>
              <Map center={this.state.mapCenter} markers={this.state.markers} />
            </div>
          </div>
          <div className="col-md-7">
            <BizList city={this.state.city} category={this.state.category} setParent={this.setParent}/>
          </div>
        </div>
      </div>
    );
  }
}

export { Results };
