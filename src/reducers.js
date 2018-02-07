import { combineReducers } from 'redux';

import { jobReducer as job } from 'features/job/job';

export default combineReducers({
  job
});