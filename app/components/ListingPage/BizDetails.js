import * as React from 'react';


class BizDetails extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       biz: {}
     }
  }

  componentWillMount () {
    this.setState({

    })
  }

  render() {

    console.log('this is biz in BizDetails', this.state.biz);
    let { name, street_address, city, state, zipcode } = this.state.biz;
    return (

      <div>
        <h1 className='bizdetail_name'>{this.props.biz.name}</h1>
        <br/>
        <h4 className="bizdetail">Address:</h4>
        <p>{this.props.biz.street_address}</p>
        <p>{this.props.biz.city}, {this.props.biz.state}</p>
        <p>{this.props.biz.zipcode}</p>
        <h4 className="bizdetail">Phone:</h4>
        <p>{this.props.biz.phone}</p>
        <h4 className="bizdetail">Website:</h4>
        <p>{this.props.biz.website_url}</p>

      </div>
    );
  }
}

// BizCard.propTypes = {
//   //our biz card takes in a prop that is an object
//   bizData: React.PropTypes.object
// }

export {BizDetails};
