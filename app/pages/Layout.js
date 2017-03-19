import * as React from 'react';
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export { Layout };
