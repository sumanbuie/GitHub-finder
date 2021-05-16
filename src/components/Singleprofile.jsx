import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";
import User from "./User";

export default class Singleprofile extends Component {
  state = {
    user: null,
    isLoading: false,
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await axios.get(
      `https://api.github.com/users/${this.props.match.params.login}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.SECRET_KEY}`
    );
    this.setState({ user: res.data, isLoading: false });
  }
  render() {
    if (this.state.isLoading === true) {
      return <Loading />;
    } else {
      console.log(this.state.user);
      return (
        <div>
          <User user={this.state.user} />
        </div>
      );
    }
  }
}
