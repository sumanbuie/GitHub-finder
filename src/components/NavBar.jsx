import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={props.icon} />
          {props.title}
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavBar.defaultProps = {
  title: "GithubFinder",
  icon: "fab fa-github",
};

export default NavBar;
