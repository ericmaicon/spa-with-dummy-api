import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import JobListContainer from './JobListContainer';

const mockStore = configureMockStore([
  thunk
]);
let store = mockStore({
  job: {
    jobs: []
  }
});

describe('JobList', () => {
  it('renders properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
      <JobListContainer />
    </Provider>, div);
  });
});