import React from 'react';

class IframeErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h3>⚠️ Could not load map. Please try again later.</h3>;
    }
    return this.props.children;
  }
}

export default IframeErrorBoundary;
