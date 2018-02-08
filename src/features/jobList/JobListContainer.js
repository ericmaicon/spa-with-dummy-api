import React from 'react';
import PropTypes from 'prop-types';
import { compose, setPropTypes, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { fetchJobs } from 'features/job/job';
import JobListForm from './components/JobListForm';

const mapStateToProps = (state) => {
  return {
    jobs: state.job.jobs
  };
};

const mapDispatchToProps = {
  fetchJobs
};

export default compose(
  setPropTypes({
    jobs: PropTypes.array
  }),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount: function componentDidMount() {
      const { fetchJobs } = this.props;

      fetchJobs();
    }
  })
)(JobListForm);