import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const TestAudioFilePage = lazy(() => import('./custom-pages/TestAudioFilePage'));

const Page1 = lazy(() => import('./custom-pages/Page1'));
const Page3 = lazy(() => import('./custom-pages/Page3'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/page1" component={ Page1 } />
          <Route path="/page3" component={ Page3 } />
          <Route path="/testaudiofilepage" component={ TestAudioFilePage } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Redirect to="/page1" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
