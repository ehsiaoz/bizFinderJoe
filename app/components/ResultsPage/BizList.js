import * as React from 'react';
import * as axios from 'axios';
import {BizCard } from './BizCard';

// const generateBizIndex = (bizArray) => {
//   return bizArray.reduce((ob, biz, i) => {
//     ob[biz._id] = biz;
//     return ob;
//   }, {})
// }

class BizList extends React.Component {
  //react lifecycle functions
  constructor(props) {
     super(props);
     this.state ={
       city: this.props.city,
       category: this.props.category,
       categoryValue: this.props.categoryValue,
       businesses: [],
       loading: false
     }
  }


  componentWillMount() {
    this.getBusinesses();
  }

  // getParams () {
  //   this.setState({
  //     city: this.props.city,
  //     category: this.props.category
  //   })
  // }

  //get businesses from database
  getBusinesses() {
    this.startLoading();
    let self = this;
    console.log("category value in BizList getBiz", this.props);
    axios.get('/api/businesses', {
      params: {
        city: this.state.city,
        category: this.state.category
      }
    })
    .then((response) => {

      self.endLoading();
      self.setState({
        businesses: response.data,
      });
      this.props.setParent(this.state.businesses);
      console.log('Biz Listbusinesses array', this.state.businesses)
    })
    .catch((error) => {
      console.log('error', error);
      self.endLoading();
    });
  }


  startLoading() {
        this.setState({
          loading: true
        })
    }

  endLoading() {
      this.setState({
        loading: false
      });
    }


  render() {
    console.log('this.state in render bizlist', this.state)
    console.log('this.props in bizlist', this.props)
      //let {setParent, appstate} = this.props;
    const bizList = this.state.businesses.map((item, i)=> {
      return <li key={i}><BizCard index={i} appstate={''} setParent={''} bizData={item} /></li>
    })
    return (
      <div>
        <ul>{bizList}</ul>
      </div>
    )
  }
}



export {BizList};
