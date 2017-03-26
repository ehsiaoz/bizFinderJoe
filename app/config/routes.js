import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Layout } from '../pages/Layout';
import { Createbiz } from '../pages/Createbiz';
import { Createcat } from '../pages/Createcat';
import { Home } from '../pages/Home';
import { Listing } from '../pages/Listing';
import { Results } from '../pages/Results';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        bizLookup: {},
        businesses: []
      }
    }

  render() {
    let {setState} = this;
    let setParent = (obb) => {
      setState(obb)
    }
    return (
      <Router history={hashHistory}  >
        <Route path="/" component={Layout} appstate={this.state} setParent={setParent}>
          <Route name="Createbiz" path="/cms/biz" component={Createbiz} appstate={this.state}  setParent={setParent} />
          <Route name="Createcat" path="/cms/category" component={Createcat} appstate={this.state}  setParent={setParent} />
          <Route path="/search" appstate={this.state}  setParent={setParent} component={Results} />
          <Route path="/biz/:id" component={Listing} appstate={this.state}  setParent={setParent}  />
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }
};
export { App };
