import axios from 'axios';

export const FETCH_JOBS = 'fetchJobs';
export const FETCH_JOBS_DONE = `${FETCH_JOBS}/done`;

export function jobReducer (state = { jobs: [] }, action) {
  switch(action.type) {
    case FETCH_JOBS_DONE:
      return {
        jobs: action.response
      };
    default:
      return state;
  }
}

export function fetchJobs() {
  return (dispatch) => {

    axios.get('http://localhost:3000').then(({ data }) => {
      dispatch({
        type: FETCH_JOBS_DONE,
        response: data
      });
    });
  };
}