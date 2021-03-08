import React from "react";
import TopNavBar from "../Navbar/TopNavBar";
import Filter from "../Atom/Filter";
import List from "../Moleclue/List";

const Home = () => {
  return (
    <div className="card">
      <TopNavBar />
      <Filter />
      <List />
    </div>
  );
};

export default Home;
