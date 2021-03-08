import React from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <Link className="navbar-brand" to="/">
            클하초대장
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default TopNavBar;
