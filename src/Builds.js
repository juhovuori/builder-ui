import React, { Component } from 'react';

import BuildListItem from './BuildListItem';

class Builds extends Component {
    constructor() {
        super();
        this.state = { builds: [] };
    }
  render() {
      if (this.state.error) {
          return <p>{this.state.error}</p>;
      }
    return (
      <div className="Builds">
          <ul>
                {this.state.builds.map(buildID => <BuildListItem key={buildID} buildID={buildID} />)}
          </ul>
      </div>
    );
  }
  componentDidMount() {
    fetch("/v1/builds")
    .then(is200)
    .then(reply => reply.json())
    .then(json => {
        this.setState({ builds: json });
    })
    .catch(pasi => this.setState({error: "moe"}));
  }
}

function is200(reply) {
    if (reply.status !== 200) {
        throw new Error("invalid pasi");
    }
    return reply;
}
export default Builds;
