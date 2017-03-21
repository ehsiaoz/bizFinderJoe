import * as React from 'react';
import { BizList } from '../components/ListingPage/BizList';

class Listing extends React.Component {
  render() {
    return (
      <div>
        Listing
        <BizList />
      </div>
    );
  }
}

export { Listing };
