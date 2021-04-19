import React from 'react';
import { Route, Switch } from 'react-router-dom';

const ROUTER: React.FC = () => (
  <div id="router-content" className="router-content">
    <ErrorBoundary>
      <ScrollToTop>
        <Switch>
          <LazyRoute
            path={getAuthedPath('/wallet/:accountId')}
            component={AccountPage}
          />
          <Route path={'/'} component={HomePage} />
        </Switch>
      </ScrollToTop>
    </ErrorBoundary>
  </div>
);

export default ROUTER;
