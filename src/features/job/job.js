import axios from 'axios';

export const FETCH_JOB = 'fetchJob';
export const FETCH_JOB_DONE = `${FETCH_JOB}/done`;

export const FETCH_ALL_JOBS = 'fetchAllJobs';
export const FETCH_ALL_JOBS_DONE = `${FETCH_ALL_JOBS}/done`;

export function jobReducer (state = { job: {}, jobs: [] }, action) {
  switch(action.type) {
  case FETCH_JOB_DONE:
    return {
      ...state,
      job: action.response
    };
  case FETCH_ALL_JOBS_DONE:
    return {
      ...state,
      jobs: action.response
    };
  default:
    return state;
  }
}

export function fetchAllJobs() {
  return dispatch => {
    dispatch(fetchJobsRequest());

    return axios.get('/jobs')
      .then(({ data }) => dispatch(fetchJobsDone(data)));
  };
}

function fetchJobsRequest() {
  return {
    type: FETCH_ALL_JOBS
  };
}

function fetchJobsDone(data) {
  return {
    type: FETCH_ALL_JOBS_DONE,
    response: data
  };
}

export function fetchJob(id) {
  return dispatch => {
    dispatch(fetchJobRequest());

    return axios.get(`/jobs/${id}`)
      .then(({ data }) => dispatch(fetchJobDone(data)));
  };
}

function fetchJobRequest() {
  return {
    type: FETCH_JOB
  };
}

function fetchJobDone(data) {
  return {
    type: FETCH_JOB_DONE,
    response: data
  };
}