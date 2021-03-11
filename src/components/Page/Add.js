import React, { useState } from "react";
import TopNavBar from "../Navbar/TopNavBar";
import Filter from "../Atom/Filter";
import List from "../Moleclue/List";
import axios from "axios";

const Add = () => {
  const [infos, setInfos] = useState({
    title: "",
    weekday: "",
    moderators: "",
    images: [],
    description: "",
    datetime: "",
    club: "",
  });

  const {
    title,
    weekday,
    moderators,
    images,
    description,
    datetime,
    club,
  } = infos; // 비구조화 할당을 통해 값 추출

  const [text, setText] = useState("");
  function test(event) {
    // console.log(event);
    event.preventDefault();
    // console.log("form go");
  }

  const onChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const onReset = () => {
    // setText("");
    loadUsers();
    console.log("click button");
  };

  const loadUsers = async () => {
    // const url = "https://www.joinclubhouse.com/event/xkL60q1y";
    try {
      const result = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url: `https://ddjw33n2b0.execute-api.ap-northeast-2.amazonaws.com/production/coopangCrawler?url=${text}`,
        // url: `https://z5v2zc0s9i.execute-api.ap-northeast-2.amazonaws.com/production/getLifeInfo`,
      }).then((res) => {
        // console.log(res.data);
        // console.log(res.data.title);

        setInfos({
          ...infos,
          title: res.data.title,
          weekday: res.data.weekday,
          images: res.data.images,
          description: res.data.description,
          datetime: res.data.datetime,
          club: res.data.club,
          moderators: res.data.moderators,
        });
        console.log(infos);
      });
    } catch {
      alert("주소를 정확하게 입력해주세요!");
    }
  };

  return (
    <div className="container mt-3">
      <br></br>
      <br></br>
      <div className="max-w-lg mx-auto">
        <h1
          className="my-4 block text-4xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          style={{ fontSize: "22px" }}
        >
          함께하고 싶은 이벤트를 <br />
          추가하고 더 많은 사람들과 함께해요
        </h1>
        <div className="w-full border p-3 bg-white rounded-md">
          <form onSubmit={test}>
            <p className="text-center" style={{ fontSize: "15px" }}>
              초대링크를 붙여넣고, 검토하기!
            </p>
            <input
              className="bg-purple-white bg-gray-200 shadow rounded border-0 p-3 w-100 mt-0"
              onChange={onChange}
              value={text}
              style={{ fontSize: "12px" }}
            />
            <button
              className="bg-gray-500 rounded border-0 w-100 p-3 mt-3"
              onClick={onReset}
            >
              Validate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
