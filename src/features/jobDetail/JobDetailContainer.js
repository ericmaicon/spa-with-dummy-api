import React from 'react';
import PropTypes from 'prop-types';
import { compose, setPropTypes, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchJob } from 'features/job/job';
import JobDetailForm from './components/JobDetailForm';

const mapStateToProps = (state) => {
  return {
    job: state.job.job
  };
};

const mapDispatchToProps = {
  fetchJob
};

export default compose(
  setPropTypes({
    job: PropTypes.object
  }),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount: function componentDidMount() {
      const { fetchJob, match } = this.props;
      const id = _.get(match, 'params.id');

      if (id) {
        fetchJob(id);
      }
    }
  })
)(JobDetailForm);