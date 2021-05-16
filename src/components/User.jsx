import React, { Fragment } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
export default function User(props) {
  if (props.user) {
    console.log(props.user.avatar_url);
    return (
      <Fragment>
        <Link to="/" className="btn btn-secondary">
          Back to Search
        </Link>
        Hireable:{""}
        {props.user.hireable ? (
          <i className="fas fa-user-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={props.user.avatar_url}
              className="round-img"
              alt="profile image"
              style={{ width: "150px" }}
            />
            <h1>{props.user.name}</h1>
            <p>{props.user.location}</p>
          </div>
          <div>
            {props.user.bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{props.user.bio}</p>
              </Fragment>
            )}
            <a href={props.user.html_url} className="btn btn-dark my-1">
              Github Profile
            </a>
            <ul>
              <li>
                {props.user.login && (
                  <Fragment>
                    <strong>Username :</strong> {props.user.login}
                  </Fragment>
                )}
              </li>
              <li>
                {props.user.company && (
                  <Fragment>
                    <strong>Company :</strong> {props.user.company}
                  </Fragment>
                )}
              </li>
              <li>
                {props.user.blog && (
                  <Fragment>
                    <strong>Website :</strong> {props.user.blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">
            Followers : {props.user.followers}
          </div>
          <div className="badge badge-success">
            Following : {props.user.following}
          </div>
          <div className="badge badge-white">
            Public Repo : {props.user.public_repos}
          </div>
          <div className="badge badge-dark">
            Public Gists : {props.user.public_gists}
          </div>
        </div>
      </Fragment>
    );
  } else {
    return <Loading />;
  }
}
