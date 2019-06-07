import React from "react";
import Info from "./RepositoryInfo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBack";
import CircularProgress from '@material-ui/core/CircularProgress'
class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.match.params.user,
      data: null
    };
  }
  componentWillMount() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let userData = JSON.parse(xhr.response);
        this.setState({ data: userData });
      }
    };
    xhr.open(
      "GET",
      `https://api.github.com/users/${this.state.user}/repos`,
      true
    );
    xhr.send();
  }

  render() {
    if (this.state.data != null) {
      return (
        <div>
          <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu" onClick={()=>{window.history.back()}}>
              <BackIcon />
            </IconButton>
            <Typography variant="h4">Git Hub API Search</Typography>
          </Toolbar>
        </AppBar>
          <div className="flex-container">
            {this.state.data.map(x => (
              <Info
                key={x.name}
                name={x.name}
                description={x.description}
                language={x.language}
                created_at={x.created_at}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return <CircularProgress />;
    }
  }
}

export default Repos;
