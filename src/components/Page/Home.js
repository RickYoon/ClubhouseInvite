import React, { useState, useEffect } from "react";
import TopNavBar from "../Navbar/TopNavBar";
import Filter from "../Atom/Filter";
import List from "../Moleclue/List";
import axios from "axios";
import "./add.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [searchtype, setSearchtype] = useState("today");
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
  } = infos;

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: `https://ddjw33n2b0.execute-api.ap-northeast-2.amazonaws.com/production/queryEvents?searchtype=${searchtype}`,
      // url: `https://z5v2zc0s9i.execute-api.ap-northeast-2.amazonaws.com/production/getLifeInfo`,
    }).then((res) => {
      // console.log(res.data.Items);
      // setEvents(res.data.Items);
      // console.log(events);
      var sortingField = "eventDate";
      console.log(res.data.Items);
      // console.log(
      // res.data.Items.sort(function (a, b) {
      //   return b.sortingField - a.sortingField;
      // });
      console.log(res.data.Items[2].eventDate);

      res.data.Items.sort(function (a, b) {
        if (a.eventDate < b.eventDate) {
          return -1;
        } else if (a.eventDate > b.eventDate) {
          return 1;
        } else {
          return 0;
        }
      });
      console.log(res.data.Items[2].eventDate);

      // );
      console.log(res.data.Items);

      setEvents(res.data.Items);
      // console.log(events);
    });
  };

  const goDetailpage = (e) => {
    window.location.href = "/add";
    console.log("you clicked!");
  };

  return (
    <div className="container mx-auto desktop mb-2 md:mb-10">
      <Filter />
      {/* {users.map((user) => (
          <List props={user} 
          />
        ))} */}

      {searchtype == "today" ? (
        <div
          className="w-full mt-3 rounded-md"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          <div
            className="card-body w-50"
            style={{ backgroundColor: "white" }}
            onClick={() => {
              console.log("today event");
              setSearchtype("today");
            }}
          >
            오늘의 이벤트
          </div>
          <div
            className="card-body w-50"
            style={{ backgroundColor: "gray" }}
            onClick={() => {
              console.log("every event");
              setSearchtype("everyday");
            }}
          >
            전체 이벤트
          </div>
        </div>
      ) : (
        <div
          className="w-full mt-3 rounded-md"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          <div
            className="card-body w-50"
            style={{ backgroundColor: "gray" }}
            onClick={() => {
              console.log("today event");
              setSearchtype("today");
              // loadUsers(searchtype);
            }}
          >
            오늘의 이벤트
          </div>
          <div
            className="card-body w-50"
            style={{ backgroundColor: "white" }}
            onClick={() => {
              console.log("every event");
              setSearchtype("everyday");
              // loadUsers(searchtype);
            }}
          >
            전체 이벤트
          </div>
        </div>
      )}

      {events.map((event) => (
        <div
          className="w-full mt-3 rounded-md"
          onClick={() => {
            console.log(event.eventCode);
          }}
        >
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
