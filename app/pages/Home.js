import * as React from 'react';
import * as axios from 'axios';
import { Link } from 'react-router';
import Autocomplete from 'react-google-autocomplete';


class Home extends React.Component {

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
    // var e = document.getElementById("category");
    console.log(event.target.options[event.target.selectedIndex]);
    this.setState({
      category: event.target.options[event.target.selectedIndex].text
    })
  }

  redirectToSearch() {
    var pathString = '/search?city=' + this.state.city + '&category=' + this.state.category;

    this.context.router.push(pathString);
    window.location.reload();
  }

  handleSubmit(event) {
    event.preventDefault();
    var city = this.state.city;
    this.redirectToSearch()
  }

  render() {

    const categoryList = this.state.categoryList.map((item, i)=> {
      return <option key={i} value={item._id}>{item.name}</option>
    })

    return (

      <div>
        <div className='row'>
          <div className='col-md-12 home_main'>
            <div className='row'>
              <div className="col-md-1">
              </div>
              <div className="col-md-10 search_wrapper">
                <h3>Let's find what you're looking for!</h3>
                <div className="center-block">
                  <form className="navbar-form navbar-left"
                    id="home_form"
                    onSubmit = {(event) => this.handleSubmit(event)}
                  >
                    <div className="form-group">
                    <select className="form-control"
                    id="home_category"
                    onChange = {(event) => this.handleSelect(event)}
                    >
                    <option defaultValue> -- select a category -- </option>
                    {categoryList}
                    </select>
                    </div>
                    <div className="form-group">
                      <Autocomplete className="form-control autocomplete"
                          id="home_autocomplete"
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
                    <button type="submit"
                      className="btn btn-default searchbtn"
                      id="home_button"
                      aria-label="search">
                      <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-1">
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-2'>
          </div>
          <div className='col-md-8 popular_services'>
            <div className='table'>
              <ul className="popular_svc_list">
                <li><a id="Handymen" href="/#/search/?city=Chicago&category=Eletricans"><span>Electrical</span></a></li>
                <li><a id="Handymen" href="/#/search/?city=Chicago&category=Handymen"><span>Handymen</span></a></li>
                <li><a id="HVAC" href="/#/search/?city=Chicago&category=HVAC"><span>HVAC</span></a></li>
                <li><a id="Landscaping" href="/#/search/?city=Chicago&category=Landscaping"><span>Landscaping</span></a></li>
                <li><a id="Pest_Control" href="/#/search/?city=Chicago&category=Pest Control"><span>Pest Control</span></a></li>
                <li><a id="Plumbing" href="/#/search/?city=Chicago&category=Plumbers"><span>Plumbers</span></a></li>
              </ul>
            </div>

          </div>
          <div className='col-md-2'>
          </div>
        </div>

        <div className='row'>

          <div className='col-md-12 home_offers'>
            <div className='row'>

              <div className='col-md-12 offer_image'>
                <img src='/images/offers.JPG' alt="Offers"/>

              </div>

            </div>
          </div>
          <div className='col-md-2'>
          </div>
        </div>
      </div>

    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.any
};





export { Home };
