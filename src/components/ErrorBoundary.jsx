import React from 'react';

/**
 * Error boundary: a render error anywhere below it shows a fallback
 * instead of a blank page. It never touches the safety gate — the gate
 * lives in src/safety/claim.js and is evaluated inside App as usual.
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log for diagnostics only; no personal health information is
    // collected or sent anywhere by this app.
    console.error('MAT Companion render error:', error, info);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="layout">
          <h1>Something went wrong</h1>
          <p>
            This page could not be loaded. Your information was not sent anywhere — nothing is
            collected by this app.
          </p>
          <button type="button" onClick={this.handleRetry}>
            Try again
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
