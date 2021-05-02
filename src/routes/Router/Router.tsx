import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import LazyRoute from '../LazyRoute/LazyRoute';
import MainPage from '../../pages/mainPage/MainPage';

const ROUTER: React.FC = () => (
  <div id="router-content" className="router-content">
    <ErrorBoundary>
      <ScrollToTop>
        <Switch>
          <LazyRoute path={'/'} component={MainPage} />
          <Route path={'/'} component={MainPage} />
        </Switch>
      </ScrollToTop>
    </ErrorBoundary>
  </div>
);

export default ROUTER;
