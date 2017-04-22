import React from 'react';
import { connect } from 'react-redux';

import Loader from 'js/components/ui/Loader';

const mapDispatchToProps = {
};

class InitializerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      error: null,
    };
  }
  componentWillMount() {
    Promise.all([
    ])
      .then(() => {
        this.setState(() => ({ ready: true }));
      })
      .catch((error) => {
        this.setState(() => ({ error }));
      });
  }

  render() {
    if (this.state.error) {
      return (
        <p style={{ textAlign: 'center' }}>
          There was an error while loading the application.
        </p>
      );
    }
    return this.state.ready ? this.props.children : <Loader />;
  }
}

InitializerComponent.propTypes = {
  children: React.PropTypes.node,
};

export default connect(null, mapDispatchToProps)(InitializerComponent);
