import * as React from 'react';
import * as axios from 'axios';
import { H1 } from '../components/Layout/H1';
import { Breadcrumbs } from '../components/Layout/Breadcrumbs';
import { BizDetails } from '../components/ListingPage/BizDetails';
import { Map } from '../components/ResultsPage/Map';

class Listing extends React.Component {

  constructor(props) {
     super(props);
     this.state ={
       id: this.props.routeParams.id,
       biz: {},
       location: {
         lat: 40.75,
         lng: -73.98
       },
       markers: [
         {
           location:{
             lat: 40.75,
             lng:-73.98
           }
         }]
     }
  }

  componentWillMount() {
      this.getBiz()
  }

  getBiz() {

    let self = this;

    axios.get(`/api/businesses/${this.state.id}`)
    .then((response) => {
      console.log('response', response);

      self.setState({
        biz: response.data[0],
        // bizLookup: generateBizIndex(response.data)
      });
      console.log('business details', this.state.biz)
    })
    .catch((error) => {
      console.log('error', error);

    });
  }


  render() {
  //  let {biz} = this.props
    console.log('Listing component',this.props )
    return (
      <div>
        <div className="row">
          <Breadcrumbs />
          <H1 h1={this.state.biz.name}/>
        </div>
        <div className="row">
          <div className="col-md-8 biz_main">
            <div className='row'>
              <div className="col-md-6">
                <BizDetails biz={this.state.biz}/>
              </div>
              <div className="col-md-6">
                <div style={{width:300, height:300, background: 'red'}}>
                  <Map center={this.state.location} markers={this.state.markers} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 biz_content">
                <img src='images/bizcontent.jpg'/>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src='images/contact.jpg'/>
          </div>
        </div>


      </div>
    );
  }
}

export { Listing };
