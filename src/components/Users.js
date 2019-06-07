import React from "react";
import { connect } from "react-redux";
import User from "./User";

const Users = props => {
  return (
    <div>
      {props.data.length === 0 && (
        <p>Please Search an option to get started!</p>
      )}
      {props.data.map(user => (
        <User
          key={user.login}
          data={user}
          handleDeleteUser={props.handleDeleteUser}
        />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(Users);
