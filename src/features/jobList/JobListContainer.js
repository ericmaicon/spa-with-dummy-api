import React from 'react';
import PropTypes from 'prop-types';
import { compose, setPropTypes } from 'recompose';

import JobListForm from './components/JobListForm';

export default compose(
  setPropTypes({
    jobs: PropTypes.object.isRequired
  })
)(JobListForm);