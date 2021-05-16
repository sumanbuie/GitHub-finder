import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="image post"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link className="btn btn-dark btn-sm my-1" to={`/profile/${login}`}>
          View profile
        </Link>
      </div>
    </div>
  );
};
export default Profile;
