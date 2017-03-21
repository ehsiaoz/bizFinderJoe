import * as React from 'react';
import { Button } from 'antd';

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
    getBusinesses();
  }


  //get businesses from database
  getBusinesses() {
    axios.get()
    this.setState({
      businesses: []
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

      </div>
    )
  }
}

//Outside of the class
//We know that this form is going to take in an action...it will require a prop that allows it to pefrom an action
BizList.propTypes = {
  //our post form takes in a prop that is a function...isRequired...if i don't give the form a submitAction prop it will throw error
  submitAction: React.PropTypes.func.isRequired,
}

export {BizForm};
