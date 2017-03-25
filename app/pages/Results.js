import * as React from 'react';
import { BizList } from '../components/ResultsPage/BizList';
import { Map } from '../components/ResultsPage/Map';
import { H1 } from '../components/Layout/H1';
import { Breadcrumbs } from '../components/Layout/Breadcrumbs';

class Results extends React.Component {

  constructor(props) {
     super(props);
     this.state ={
       mapCenter: {
         lat: 40.75,
         lng: -73.98
       },
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

  render() {

    console.log('this.props Results', this.props)
    const { query } = this.props.location;
    const { date, filter } = query;
    console.log("date ", date);
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
            <BizList  />
          </div>
        </div>
      </div>
    );
  }
}

export { Results };
