import React, { useState, useEffect } from "react";
import TopNavBar from "../Navbar/TopNavBar";
import Filter from "../Atom/Filter";
import List from "../Moleclue/List";
import axios from "axios";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
    console.log(users);
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
  };

  return (
    <div className="container mx-auto desktop mb-2 md:mb-10">
      <Filter />
      <div className="container mt-3 m-0 p-0">
        <List />
        <List />
        {users.map((user) => (
          <div>{user.company.catchPhrase}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
