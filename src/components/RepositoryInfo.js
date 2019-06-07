import React from "react";
import Timer from "@material-ui/icons/TimerRounded";
import LabelR from "@material-ui/icons/LabelRounded";


class RepositoryInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex-box">
        <div className="form-data">
        {this.props.name && <p>{this.props.name}</p>}
        {this.props.description && <p><LabelR />{this.props.description}</p>}
        {this.props.language && <p><LabelR />{this.props.language}</p> }
        {this.props.created_at && <p><Timer />{this.props.created_at}<Timer /></p>}
        </div>
      </div>
    );
  }
}

export default RepositoryInfo;
