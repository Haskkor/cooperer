import React, { Suspense } from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

const LAZYROUTE: React.SFC<RouteProps> = ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  component: Component,
  ...rest
}) => {
  if (!Component) {
    return null;
  }
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) => (
        <Suspense fallback={null}>
          <Component {...props} />
        </Suspense>
      )}
    />
  );
};

export default LAZYROUTE;
