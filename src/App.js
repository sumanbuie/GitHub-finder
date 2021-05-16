import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import Form from "./components/Form";
import Alert from "./components/Alert";
import About from "./components/About";
import Singleprofile from "./components/Singleprofile";
import axios from "axios";

// CLIENT_ID SECRET_KEY

class App extends Component {
  state = {
    isLoading: false,
    users: [],
    alert: null,
  };
  searchUsers = async (text) => {
    this.setState({ isLoading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.SECRET_KEY}`
    );
    this.setState({ users: res.data.items, isLoading: false });
  };

  setAlert = (msg, clas) => {
    this.setState({ alert: { msg, clas } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };
  clearSearch = () => {
    this.setState({ isLoading: false, users: [] });
  };
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Form
                      search={this.searchUsers}
                      clearSearch={this.clearSearch}
                      btnLoad={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users
                      users={this.state.users}
                      isLoading={this.state.isLoading}
                    />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/profile/:login"
                component={Singleprofile}
                render={(props) => {
                  <Fragment>
                    <Singleprofile {...props} />;
                  </Fragment>;
                }}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
