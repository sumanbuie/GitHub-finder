import React, { Component } from "react";
import Profile from "./Profile";
import Loading from "./Loading";

export default class Users extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <div>
          <Loading />;
        </div>
      );
    } else {
      return (
        <div style={userStyle}>
          {this.props.users.map((user) => (
            <Profile key={user.id} user={user} />
          ))}
        </div>
      );
    }
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
