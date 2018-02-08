import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { Grid, AppBar, Toolbar, Typography } from 'material-ui';

import store from 'store';
import history from 'browserHistory';
import JobListContainer from 'features/jobList/JobListContainer';
import JobDetailContainer from 'features/jobDetail/JobDetailContainer';

const AppForm = () => (
  <Provider store={store}>
    <Fragment>
      <AppBar
        position="static"
        color="default"
      >
        <Toolbar>
          <Typography variant="title" color="inherit">
            Job List
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        alignItems='center'
        direction='column'
        justify='center'
      >
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={JobListContainer} />
            <Route exact path='/detail/:id' component={JobDetailContainer} />
          </Switch>
        </Router>
      </Grid>
    </Fragment>
  </Provider>
);

export default AppForm;