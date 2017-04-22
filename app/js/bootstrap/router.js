import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';

import { history } from './store';
import * as routes from '../constants/routes';

import Layout from '../components/views/Layout';
import WelcomeView from '../components/views/WelcomeView';
import AboutView from '../components/views/AboutView';
import PaletteView from '../containers/Palette';

const RouterContainer = ({ }) =>
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route
          exact
          component={WelcomeView}
          path={routes.Root}
        />
        <Route
          exact
          component={AboutView}
          path={routes.About}
        />
        <Route
          exact
          component={PaletteView}
          path={routes.Palette}
        />
        <Redirect from="*" to={routes.Root} />
      </Switch>
    </Layout>
  </ConnectedRouter>;

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, null)(RouterContainer);
