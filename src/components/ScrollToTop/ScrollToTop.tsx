import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class ScrollToTop extends React.PureComponent<RouteComponentProps> {
  public componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  public render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
