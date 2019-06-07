import React from "react";
import { connect } from "react-redux";
import Search from "./Search";
import { addUser, removeUser } from "./../store/action";

const AddSearch = props => (
  <div>
    <Search
      handleClick={user => props.dispatch(addUser(user))}
      handleDeleteUser={id => props.dispatch(removeUser(id))}
    />
  </div>
);

export default connect()(AddSearch);
