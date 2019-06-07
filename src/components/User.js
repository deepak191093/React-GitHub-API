import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import LocationCity from "@material-ui/icons/LocationOn";
import DeleteIcon from "@material-ui/icons/Delete";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="options">
        <h2>User Information </h2>
        <Avatar
          size="large"
          src={this.props.data.avatar_url}
          style={{
            height: "100px",
            width: "100px",
            display: "block",
            margin: "auto",
            border: "2px solid white"
          }}
          
        />
        <div className="profile">
          <h3>{this.props.data.login}</h3>
          <h3>
            {" "}
            {this.props.data.location ? <LocationCity /> : ""}{" "}
            {this.props.data.location}
          </h3>
          <div>
            <Link to={`/${this.props.data.login}`} style={{ color: "white" }}>
              <Avatar
                size="large"
                src="./GitHub-Mark.png"
                style={{
                  height: "50px",
                  width: "50px",
                  display: "block",
                  margin: "auto",
                  border: "2px solid white"
                }}
              />
            </Link>
          </div>
          <br />
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={e => {
              this.props.handleDeleteUser(this.props.data.login);
            }}
          >
          Delete
            <DeleteIcon />
          </Button>
        </div>
      </div>
    );
  }
}

export default User;
