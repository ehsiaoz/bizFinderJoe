import * as React from 'react';
import { CatForm } from '../components/Create/CatForm';
import * as axios from 'axios';
import { notifictation} from 'antd';

class Createcat extends React.Component {

  initializeState() {

  }

  componentWillMount() {
    this.initializeState({
      // loading: false
    });
  }


  createCat(catObj) {
    // this.startLoading();
    console.log('catObj', catObj);
    axios.post('/api/categories', catObj)
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
        <h2>Create Category</h2>
        <CatForm
        submitAction={(catObj) => this.createCat(catObj)}
        />
      </div>
    );
  }
}

// CreatePost contextTypes
// Needed to get reference to router context
// so that we can redirect the user programmatically
// with react router.
Createcat.contextTypes = {
  router: React.PropTypes.any
}


export { Createcat };
