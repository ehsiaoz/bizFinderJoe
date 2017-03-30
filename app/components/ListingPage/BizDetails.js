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
        <h1>{this.props.biz.name}</h1>
        <br/>
        <h4>Address:</h4><p>{this.props.biz.street_address}</p>
        <p>{this.props.biz.city}, {this.props.biz.state}</p>
        <p>{this.props.biz.zipcode}</p>
      </div>
    );
  }
}

// BizCard.propTypes = {
//   //our biz card takes in a prop that is an object
//   bizData: React.PropTypes.object
// }

export {BizDetails};
