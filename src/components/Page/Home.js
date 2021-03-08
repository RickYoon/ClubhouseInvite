import React from "react";
import TopNavBar from "../Navbar/TopNavBar";
import Filter from "../Atom/Filter";
import List from "../Moleclue/List";

const Home = () => {
  return (
    <div className="Container">
      <Filter />
      <div className="container mt-3">
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default Home;
