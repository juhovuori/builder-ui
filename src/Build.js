import React, { Component } from 'react';

class Build extends Component {
    constructor() {
        super();
        this.state = { build: {} };
    }
  render() {
    return (
      <div className="Build">
        <p className="Build-intro">
          { this.state.build.id ? null : "loading"  }
          { this.state.build.id }
        </p>
      </div>
    );
  }
  componentDidMount() {
    fetch("/v1/builds/" + this.props.params.buildID)
    .then(reply => reply.json())
    .then(json => {
        this.setState({ build: json });
    });
  }
}

export default Build;
