import * as React from 'react';
import { ErrorInfo } from 'react';

import Messages from '../Messages/Messages';

interface Props {
  showErrorMsg?: boolean;
  className?: string;
  error?: Error;
  children: React.ReactNode;
  returnNullOnError?: boolean;
}

interface State {
  error?: Error | undefined;
  info: any;
}

export const useAsyncError = () => {
  const [error, setError] = React.useState<Error | null>(null);
  if (error) throw error;
  return setError;
};

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    error: undefined, // eslint-disable-line
    info: {}
  };

  public componentDidCatch(error: Error | undefined, info: ErrorInfo): void {
    this.setState({ error, info });
  }

  public render(): Record<string, unknown> | null | undefined {
    const {
      props: {
        children,
        returnNullOnError,
        className,
        showErrorMsg: showErrorDetail
      },
      state: { error }
    } = this;

    const errorForRender = error || this.props.error;

    return errorForRender ? (
      returnNullOnError ? null : (
        <div className={`${className ? `${className} ` : ''}w-full`}>
          <Messages
            type="error"
            content={
              showErrorDetail
                ? errorForRender.message
                : 'It looks like something went wrong. Please try refreshing the page.'
            }
          />
        </div>
      )
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
