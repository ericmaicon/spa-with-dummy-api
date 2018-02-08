import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Grid, AppBar, Toolbar, Typography } from 'material-ui';

import reducers from 'reducers';
import history from 'browserHistory';

import JobListContainer from 'features/jobList/JobListContainer';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

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
          </Switch>
        </Router>
      </Grid>
    </Fragment>
  </Provider>
);

export default AppForm;