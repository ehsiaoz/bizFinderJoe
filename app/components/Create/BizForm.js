import * as React from 'react';
import { Button } from 'antd';

class BizForm extends React.Component {
  //react lifecycle functions

  initializeState() {
    this.setState({
      name: '',
      street_address: '',
      city: '',
      state: '',
      zipcode: '',
      website_url: '',
      fb_url: '',
      phone: '',
      email: '',
      first_name: '',
      last_name: '',
      thumbnail_url: '',
      desc_snippet: '',
      desc_overview: '',
      categories: [],
    });
  }

  componentWillMount() {
    this.initializeState();
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

  renderLoading() {
    if(this.props.loading) {
      <p>loading..</p>
    }

  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className='form-row'>
            <label htmlFor='name'>Business Name</label><br/>
            <input
              defaultValue={this.state.bizName}
              type = 'text'
              id='name'
              //you pass in a function definition not a called function in onChange i.e. this.handlUpdateTitle.bind(this)
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='street_address'>Street Address</label><br/>
            <input
              type='text'
              id='street_address'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='city'>City</label><br/>
            <input
              type='text'
              id='city'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='state'>State</label><br/>
            <input
              type='text'
              id='state'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='zipcode'>Zipcode</label><br/>
            <input
              type='text'
              id='zipcode'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='website_url'>website url</label><br/>
            <input
              type='text'
              id='website_url'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='fb_url'>Facebook URL</label><br/>
            <input
              type='text'
              id='fb_url'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='phone'>Phone Number</label><br/>
            <input
              type='text'
              id='phone'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='email'>Email</label><br/>
            <input
              type='text'
              id='email'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='first_name'>First Name</label><br/>
            <input
              type='text'
              id='first_name'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='last_name'>Last Name</label><br/>
            <input
              type='text'
              id='last_name'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='thumbnail_url'>Thumbnail URL</label><br/>
            <input
              type='text'
              id='thumbnail_url'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='desc_snippet'>Description Snippet</label><br/>
            <input
              type='text'
              id='desc_snippet'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='desc_overview'>Description</label><br/>
            <input
              type='text'
              id='desc_overview'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='categories'>Category</label><br/>
            <input
              defaultValue={this.state.category}
              type='text'
              id='categories'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <Button
              type='primary'
              htmlType='submit'

              >
              Save
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

//Outside of the class
//We know that this form is going to take in an action...it will require a prop that allows it to pefrom an action
BizForm.propTypes = {
  //our post form takes in a prop that is a function...isRequired...if i don't give the form a submitAction prop it will throw error
  submitAction: React.PropTypes.func.isRequired,
}

export {BizForm};
