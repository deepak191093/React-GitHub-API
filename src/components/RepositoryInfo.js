import React from "react";

class RepositoryInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex-box">
        <h1>{this.props.name}</h1>
        <h3>{this.props.description}</h3>
        <h3>{this.props.language}</h3>
        <h3>{this.props.created_at}</h3>
      </div>
    );
  }
}

export default RepositoryInfo;
