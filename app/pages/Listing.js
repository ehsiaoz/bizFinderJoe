import * as React from 'react';
import * as axios from 'axios';
import { H1 } from '../components/Layout/H1';
import { Breadcrumbs } from '../components/Layout/Breadcrumbs';
import { BizDetails } from '../components/ListingPage/BizDetails';

class Listing extends React.Component {

  constructor(props) {
     super(props);
     this.state ={
       id: this.props.routeParams.id,
       biz: {}

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
          <div className="col-md-8">
            <div className="col-md-6">
              <BizDetails biz={this.state.biz}/>
            </div>
            <div className="col-md-6">
              Map
            </div>
          </div>
          <div className="col-md-4">
            Rail
          </div>
        </div>


      </div>
    );
  }
}

export { Listing };
