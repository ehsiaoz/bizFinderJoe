import * as React from 'react';
import * as axios from 'axios';
import { Link } from 'react-router';
import Autocomplete from 'react-google-autocomplete';

class Header extends React.Component {

  constructor(props) {
     super(props);
     this.state ={
       categoryList: [],
       category: '',
       city: ''
     }
  }

  componentWillMount() {
    this.getCategories()
  }

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

  handleSelect(event) {
    var e = document.getElementById("category");
    console.log(e.options[e.selectedIndex].text);
    this.setState({
      category: event.target.value
    })
    console.log("Category Selected: ", this.state.category)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitAction(this.state);
  }

  render() {

    const categoryList = this.state.categoryList.map((item, i)=> {
      return <option key={i} value={item._id}>{item.name}</option>
    })

    return (
      <div>
        <nav className="navbar navbar-fixed-top" role="banner">
          {/* Container */}
          <div className="container">
            <a className="navbar-brand" href="#" style={{color: 'white'}}>Biz Finder
            </a>
            {/* top global search form */}
            <form className="navbar-form navbar-left"
            onSubmit = {(event) => this.handleSubmit(event)}
            >
              <div className="form-group">
              <select className="form-control"
              id="category"
              onChange = {(event) => this.handleSelect(event)}
              >
              <option defaultValue> -- select a category -- </option>
              {categoryList}
              </select>
              </div>
              <div className="form-group">
                <Autocomplete className="form-control autocomplete"
                    style={{width: '100%'}}
                    onPlaceSelected={(place) => {
                      this.setState({
                        city: place.address_components[0].long_name
                      });
                    }}

                    types={['(cities)']}
                    componentRestrictions={{country: "us"}}
                />
              </div>
              <button type="submit" className="btn btn-default searchbtn" aria-label="search">
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
              </button>
            </form>
            {/* bottom global search form */}
            {/* top right header nav links */}
            <ul className="nav navbar-nav navbar-right">
              <li className="login"><a href="#">Login</a></li>
            </ul>
            {/* bottom right header nav links */}
          </div>
          {/* Containter */}
        </nav>
      </div>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.any
};

export { Header };
