import * as React from 'react';
import * as axios from 'axios';


class BizList extends React.Component {
  //react lifecycle functions

  initializeState() {
    this.setState({
      businesses: [],
      loading: false
    });
  }

  componentWillMount() {
    this.initializeState();
    this.getBusinesses();
  }


  //get businesses from database
  getBusinesses() {
    this.startLoading();
    axios.get('/api/businesses')
    .then((response) =>{
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


  handleUpdateTextInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    //prevent submit from refreshing the page
    event.preventDefault();
    console.log('Save', this.state);
    this.props.submitAction(this.state);
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
    return (
      <div>
        BizList
      </div>
    )
  }
}



export {BizList};
