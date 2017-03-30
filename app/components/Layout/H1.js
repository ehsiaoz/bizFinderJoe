import * as React from 'react';

class H1 extends React.Component {

  render() {
    return (
      <div className="H1">
        <h1 className='h1_header'>{this.props.city} {this.props.category}</h1>
      </div>
    );
  }
}


export { H1 };
