import * as React from 'react';
import * as axios from 'axios';


class BizList extends React.Component {
  //react lifecycle functions
  constructor(props) {
     super(props);
     this.state ={
       businesses: [],
       loading: false
     }
  }

  componentWillMount() {
    this.getBusinesses();
  }


  //get businesses from database
  getBusinesses() {
    this.startLoading();
    axios.get('/api/businesses')
    .then((response) => {
      console.log('response', response);
      this.endLoading();
      this.setState({
        businesses: response.data
      });
      console.log('businesses array', this.state.businesses)
    })
    .catch(() => {
      console.log('error', error);
      this.endLoading();
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
    const bizList = this.state.businesses.map((item, i)=> {
      return <li key={i}>{item.name}/></li>

    })
    return (
      <div>
        <ul>{bizList}</ul>
      </div>
    )
  }
}



export {BizList};
