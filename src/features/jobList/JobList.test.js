import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';

import JobListContainer from './JobListContainer';
import { FETCH_JOBS, FETCH_JOBS_DONE, fetchJobs } from 'features/job/job';

let store;
const axiosMock = new MockAdapter(axios);
const mockStore = configureMockStore([
  thunk
]);

describe('JobList', () => {
  beforeEach(() => {
    store = mockStore({
      job: {
        jobs: []
      }
    });
  });

  it('renders properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
      <JobListContainer />
    </Provider>, div);
  });

  it('test fetchJobs', async () => {
    axiosMock.onGet('http://localhost:3000').reply(200, {
      jobs: []
    });

    const expectedActions = [
      { type: FETCH_JOBS },
      { type: FETCH_JOBS_DONE, response: { jobs: [] } }
    ];

    return store.dispatch(fetchJobs()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});