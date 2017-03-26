import * as React from 'react';
import { browserHistory } from 'react-router';
import * as axios from 'axios';
import { Button } from 'antd';


class CatForm extends React.Component {
  //react lifecycle functions

  constructor(props) {
     super(props);
     this.state ={
       categoryList: [],
       name: ''
     }
  }

  componentWillMount() {
    this.getCategories()
  }

  // handleUpdateTitle(event) {
  // //the onChange function sends and event
  //   this.setState({
  //     title: event.target.value
  //   })
  // }
  //
  // handleUpdateCategory(event) {
  //   this.setState({
  //     category: event.target.value
  //   })
  // }

  //get categories to allow user to select from dropdown
  getCategories() {
    let self = this;
    axios.get('/api/categories')
    .then((response) => {
      console.log('response from axios get', response.data);

      self.setState({
        categoryList: response.data,
        // bizLookup: generateBizIndex(response.data)
      });
    })
    .catch((error) => {
      console.log('error', error);
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
    this.props.submitAction(this.state)
  }

  
  render() {

    const categoryList = this.state.categoryList.map((item, i)=> {
      return <li key={i}>{item.name}</li>
    })
    console.log("categoryList", this.state.categoryList);

    return (
      <div>
        <h4>Current Categories</h4>
        <ul>
          {categoryList}
        </ul>
        <form onSubmit={(event) => this.handleSubmit(event)}>

          <div className='form-row'>
            <label htmlFor='name'>Category Name</label><br/>
            <input
              type = 'text'
              id='name'
              //you pass in a function definition not a called function in onChange i.e. this.handlUpdateTitle.bind(this)
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <Button
              type='primary'
              htmlType='submit'

              >
              Create
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

//Outside of the class
//We know that this form is going to take in an action...it will require a prop that allows it to pefrom an action
CatForm.propTypes = {
  //our post form takes in a prop that is a function...isRequired...if i don't give the form a submitAction prop it will throw error
  submitAction: React.PropTypes.func.isRequired,
}

CatForm.contextTypes = {
  router: React.PropTypes.any
};

export {CatForm};
