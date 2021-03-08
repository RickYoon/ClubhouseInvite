import React from "react";
import TopNavBar from "../Navbar/TopNavBar";
import Filter from "../Atom/Filter";
import List from "../Moleclue/List";

const Home = () => {
  return (
    <div className="container mx-auto desktop mb-2 md:mb-10">
      <Filter />
      <div className="container mt-3 m-0 p-0">
        <List />
        <List />
      </div>
    </div>
  );
};

export default Home;
