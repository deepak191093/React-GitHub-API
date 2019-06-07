import React from "react";
import Users from "./Users";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Home";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDataArray: JSON.parse(localStorage.getItem("UserProfile"))
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    let data = null;
    let user = this.refs.userData.value.trim("");
    if (user != "") {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4)
          if (xhr.status === 200) {
            let userData = JSON.parse(xhr.response);

            let hasAlreadyData = this.state.userDataArray.filter(
              x => x.login === userData.login
            );
            if (hasAlreadyData.length === 0) {
              data = {
                avatar_url: userData.avatar_url,
                login: userData.login,
                location: userData.location
              };
              this.props.handleClick({ ...data });
              this.setState({
                userDataArray: this.state.userDataArray.concat(data)
              });
            } else {
              alert("User Already Inserted");
            }
          } else {
            alert("Enter A valid User Name And Password");
          }
      };
      xhr.open("GET", "https://api.github.com/users/" + user, true);
      xhr.send();
      this.refs.userData.value = "";
    } else {
      alert("Enter A  Valid User Name");
    }
  }

  //===================================================================
  handleDeleteUser = userToRemove => {
    this.setState(prevState => ({
      userDataArray: prevState.userDataArray.filter(
        ({ login }) => userToRemove !== login
      )
    }));
    this.props.handleDeleteUser(userToRemove);
  };

  render() {
    return (
      <div className="Search-container">
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu" onClick={()=>{window.location.reload()}}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h4">Git Hub API Search</Typography>
          </Toolbar>
        </AppBar>

        <IconButton aria-label="Menu" style={{backgroundColor : "white"}} onClick={()=> {this.refs.userData.value = "";}}>
          <DeleteIcon />
        </IconButton>
        <input
          className="form"
          type="text"
          placeholder="Git Hub User Name"
          ref="userData"
        />
        <IconButton aria-label="Search" onClick={this.handleClick} style={{backgroundColor : "white"}}>
          <SearchIcon />
        </IconButton>

        <Users handleDeleteUser={this.handleDeleteUser} />
      </div>
    );
  }
}

export default Search;
