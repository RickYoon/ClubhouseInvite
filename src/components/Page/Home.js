import React, { useState, useEffect } from "react";
import TopNavBar from "../Navbar/TopNavBar";
import Filter from "../Atom/Filter";
import List from "../Moleclue/List";
import axios from "axios";

const Home = () => {
  const [users, setUser] = useState({});

  useEffect(() => {
    loadUsers();
    console.log(users);
  }, []);

  const loadUsers = async () => {
    const url = "https://www.joinclubhouse.com/event/xkL60q1y";
    const result = await axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: `https://ddjw33n2b0.execute-api.ap-northeast-2.amazonaws.com/production/coopangCrawler?url=${url}`,
      // url: `https://z5v2zc0s9i.execute-api.ap-northeast-2.amazonaws.com/production/getLifeInfo`,
    }).then((res) => {
      console.log(res.body);
      setUser(res.body);
      let temp = JSON.stringify(users);
      console.log(temp);
      // console.log(res.data);
    });
  };

  return (
    <div className="container mx-auto desktop mb-2 md:mb-10">
      <Filter />
      <div className="container mt-3 m-0 p-0">
        {/* {users.map((user) => (
          <List props={user} />
        ))} */}
      </div>
    </div>
  );
};

export default Home;

// const loadItems = async () => {
//   setIsLoading(true);
//   await axios({
//     method: "get",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     url: `https://nxqs16xalf.execute-api.ap-northeast-2.amazonaws.com/default/sgMarket?cat=${props.catselection}`,
//   }).then((res) => {
//     setIsLoading(false);
//     var sortingField = "revenue";
//     const newRanking = res.data.sort(function (a, b) {
//       // 오름차순
//       return b[sortingField] - a[sortingField];
//       // 13, 21, 25, 44
//     });
