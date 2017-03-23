import * as React from 'react';
import { Link } from 'react-router';

class Breadcrumbs extends React.Component {

  render() {
    return (
      <div className="Breadcrumbs">
        <p><Link to={`/`} >Home</Link> > <Link to={`/`} >Chicago</Link> > Hotels</p>
      </div>
    );
  }
}


export { Breadcrumbs };
