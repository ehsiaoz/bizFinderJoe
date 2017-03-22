import * as React from 'react';
import { BizList } from '../components/ResultsPage/BizList';

class Results extends React.Component {
  render() {
    console.log('this.props Results', this.props)
  //  let {setParent, appstate} = this.props;
    return (
      <div>
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
