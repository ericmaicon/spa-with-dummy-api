import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';

import reducers from './reducers';
import history from './browserHistory';

import JobListContainer from 'features/jobList/JobListContainer';

const store = createStore(
  reducers
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={JobListContainer} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('app'));