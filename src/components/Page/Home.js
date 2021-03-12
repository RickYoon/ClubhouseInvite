import React, { useState, useEffect } from "react";
import TopNavBar from "../Navbar/TopNavBar";
import Filter from "../Atom/Filter";
import List from "../Moleclue/List";
import axios from "axios";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [infos, setInfos] = useState({
    title: "",
    weekday: "",
    moderators: "",
    moderatorsArray: "",
    images: [],
    description: "",
    datetime: "",
    datetimeDB: "",
    club: "",
    url: "",
  });

  const {
    title,
    weekday,
    moderators,
    moderatorsArray,
    images,
    description,
    datetime,
    club,
  } = infos; // 비구조화 할당을 통해 값 추출

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: `https://ddjw33n2b0.execute-api.ap-northeast-2.amazonaws.com/production/queryEvents`,
      // url: `https://z5v2zc0s9i.execute-api.ap-northeast-2.amazonaws.com/production/getLifeInfo`,
    }).then((res) => {
      console.log(res.data.Items);
      setEvents(res.data.Items);
      console.log(events);
    });
  };

  return (
    <div className="container mx-auto desktop mb-2 md:mb-10">
      <Filter />
      <div className="container mt-3 m-0 p-0">
        {/* {users.map((user) => (
          <List props={user} />
        ))} */}
        {events.map((event) => (
          <div className="container mt-4">
            <div className="card">
              <div className="card-body">
                <p className="card-subtext" style={{ fontSize: "12px" }}>
                  {event.datetimeKorea}
                </p>
                <h5 className="card-title" style={{ fontSize: "15px" }}>
                  {event.title}
                </h5>
                {event.images.map((kk, index) => (
                  <div className="avatarbox">
                    <div className="innerbox">
                      <img
                        src={kk}
                        alt="Avatar"
                        width="40px"
                        style={{ borderRadius: "50%", marginLeft: "5px" }}
                      ></img>
                      <div style={{ fontSize: "10px" }}>
                        {event.moderators[index]}
                      </div>
                    </div>
                  </div>
                ))}
                <p className="card-subtext mt-3" style={{ fontSize: "12px" }}>
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
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
