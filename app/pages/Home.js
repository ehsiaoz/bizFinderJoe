import * as React from 'react';
import { BizList } from '../components/ListingPage/BizList';

class Home extends React.Component {
  render() {
    return (
      <div>
      Central
      <BizList />
      </div>
    );
  }
}

export { Home };
