import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Router, Route, Switch } from 'react-router-dom';

import history from 'browserHistory';
import JobDetailContainer from './JobDetailContainer';

const mockStore = configureMockStore([
  thunk
]);
let store = mockStore({
  job: {
    job: {
      company_logo: '',
      title: '',
      company: '',
      description: ''
    }
  }
});

describe('JobList', () => {
  it('renders properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
      <Router history={history}>
        <JobDetailContainer />
      </Router>
    </Provider>, div);
  });
});