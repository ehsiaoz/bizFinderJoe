import * as React from 'react';
import { Link } from 'react-router';

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
                <input type="text" className="form-control" placeholder="Search"/>
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
