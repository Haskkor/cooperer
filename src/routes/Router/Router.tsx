import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import App from '../../App';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import LazyRoute from '../LazyRoute/LazyRoute';

const ROUTER: React.FC = () => (
  <div id="router-content" className="router-content">
    <ErrorBoundary>
      <ScrollToTop>
        <Switch>
          <LazyRoute path={'/'} component={App} />
          <Route path={'/'} component={App} />
        </Switch>
      </ScrollToTop>
    </ErrorBoundary>
  </div>
);

export default ROUTER;
