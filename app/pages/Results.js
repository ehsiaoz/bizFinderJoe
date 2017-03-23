import * as React from 'react';
import { BizList } from '../components/ResultsPage/BizList';
import { H1 } from '../components/Layout/H1';
import { Breadcrumbs } from '../components/Layout/Breadcrumbs';

class Results extends React.Component {
  render() {
    console.log('this.props Results', this.props)
  //  let {setParent, appstate} = this.props;
    return (
      <div>
        <Breadcrumbs />
        <H1 />
        <div className="row">
          <div className="col-md-4">
            map
          </div>
          <div className="col-md-8">
            <BizList  />
          </div>
        </div>
      </div>
    );
  }
}

export { Results };
