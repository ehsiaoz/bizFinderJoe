import * as React from 'react';
import { BizForm } from '../components/Create/BizForm';
import * as axios from 'axios';
import { notifictation} from 'antd';

class Cms extends React.Component {

  initializeState() {

  }

  componentWillMount() {
    this.initializeState({
      // loading: false
    });
  }


  createBiz(bizObj) {
    // this.startLoading();
    axios.post('/api/businesses', bizObj)
    .then(() =>{
      console.log('success');
      // this.endLoading();
      // this.redirectToPosts()

    })
    .catch(() => {
      console.log('error', error);
      // this.endLoading();
    });
  }

  render() {
    return (
      <div>
        <h2>New Biz</h2>
        <BizForm
        submitAction={(postObj) => this.createBiz(bizObj)}
        />
      </div>
    );
  }
}

// CreatePost contextTypes
// Needed to get reference to router context
// so that we can redirect the user programmatically
// with react router.
Cms.contextTypes = {
  router: React.PropTypes.any
}


export { Cms };
