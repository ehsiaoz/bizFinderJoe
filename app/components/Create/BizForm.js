import * as React from 'react';
import * as axios from 'axios';
import { Button } from 'antd';
import Autocomplete from 'react-google-autocomplete';

class BizForm extends React.Component {
  //react lifecycle functions

  constructor(props) {
     super(props);
     this.state ={
       categoryList: [],
       name: '',
       formatted_address: '',
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
       category: '',
       location: {
         lat: null,
         lng: null,
       }
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

  handleSelect(event) {
    this.setState({
      category: event.target.value
    })
  }

  handleSubmit(event) {
    //prevent submit from refreshing the page
    event.preventDefault();
    this.getGeoCode();

    this.props.submitAction(this.state);
  }

  getGeoCode(event) {
    let self = this;
    const address_string = this.state.street_address + '+' + this.state.city + '+' + this.state.state;

    axios.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB2YjPzqYIuEbcLnKcE27KwdJyNDqd0cPE&address=' + address_string)
      .then(function(response){
        const formatted_address = response.data.results[0].formatted_address;
        const street_address = response.data.results[0].address_components[0].long_name + ' ' + response.data.results[0].address_components[1].short_name;
        const city = response.data.results[0].address_components[3].long_name;
        const state = response.data.results[0].address_components[5].short_name;
        const zipcode = response.data.results[0].address_components[7].short_name
        const location = {
          lat: response.data.results[0].geometry.location.lat,
          lng: response.data.results[0].geometry.location.lng
        }

        self.setState({
          formatted_address: formatted_address,
          street_address: street_address,
          city: city,
          state: state,
          zipcode: zipcode,
          location: location
        })
      })
      .catch((error) => {
        console.log('error', error);
      });
  }


  render() {
    const categoryList = this.state.categoryList.map((item, i)=> {
      return <option key={i} value={item._id}>{item.name}</option>
    })
    return (
      <div>

        <form>
          <div className='form-row'>
            <label htmlFor='street_address'>Street Address</label><br/>
            <input
              required
              type='text'
              id='street_address'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='cityState'>City, State</label><br/>
            <Autocomplete
                style={{width: '50%'}}
                onPlaceSelected={(place) => {
                  console.log(place);
                  this.setState({
                    city: place.address_components[0].long_name,
                    state: place.address_components[2].short_name
                  });
                }}
                types={['(cities)']}
                componentRestrictions={{country: "us"}}
            />
          </div>
          <div className='form-row'>
            <Button
              type='primary'
              htmlType='button'
              onClick={(event) => this.getGeoCode(event)}
              >
              Lookup
            </Button>
          </div>
        </form>

        <h4>Biz Details</h4>
        <div>
          formatted_address: {this.state.formatted_address} <br/>
          city: {this.state.city} <br/>
          state: {this.state.state} <br/>
        </div>

        <form onSubmit={(event) => this.handleSubmit(event)}>

          <div className='form-row'>
            <label htmlFor='category'>Category</label><br/>
            <select
              id='category'
              onChange={(event) => this.handleSelect(event)}>
              <option defaultValue> -- select a category -- </option>
              {categoryList}
            </select>
          </div>

          <div className='form-row'>
            <label htmlFor='name'>Business Name</label><br/>
            <input
              required
              defaultValue={this.state.bizName}
              type = 'text'
              id='name'
              //you pass in a function definition not a called function in onChange i.e. this.handlUpdateTitle.bind(this)
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
