import * as React from 'react';
import { Link } from 'react-router';
import Autocomplete from 'react-google-autocomplete';

class Header extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top" role="banner">
          {/* Container */}
          <div className="container">
            <a className="navbar-brand" href="#" style={{color: 'white'}}>Biz Finder
            </a>
            {/* top global search form */}
            <form className="navbar-form navbar-left">
              <div className="form-group">
              <select className="form-control" name="cars">
              <option defaultValue> -- select a category -- </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
              </select>
              </div>
              <div className="form-group">
                <Autocomplete className="form-control autocomplete"
                    style={{width: '100%'}}
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


export { Header };
