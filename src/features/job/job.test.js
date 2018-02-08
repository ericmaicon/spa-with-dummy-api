import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';

import { FETCH_JOB, FETCH_JOB_DONE, FETCH_ALL_JOBS, FETCH_ALL_JOBS_DONE, fetchAllJobs, fetchJob } from 'features/job/job';

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

  it('test fetchAllJobs', async () => {
    axiosMock.onGet('/jobs').reply(200, {
      jobs: []
    });

    const expectedActions = [
      { type: FETCH_ALL_JOBS },
      { type: FETCH_ALL_JOBS_DONE, response: { jobs: [] } }
    ];

    return store.dispatch(fetchAllJobs()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('test fetchJob', async () => {
    axiosMock.onGet('/jobs/1').reply(200, {
      job: {}
    });

    const expectedActions = [
      { type: FETCH_JOB },
      { type: FETCH_JOB_DONE, response: { job: {} } }
    ];

    return store.dispatch(fetchJob(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});