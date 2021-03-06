import React, { useEffect } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import logo from "./logo192.png";

const List = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  const goanother = () => {
    window.location.href = "https://www.joinclubhouse.com/event/MznYp6qp";
    console.log("you clicked!!");
  };

  return (
    <>
      <div
        className="my-2 w-full md:w-5/6 mx-auto bg-white p-2 shadow rounded-md hover:bg-gray-200"
        onClick={goanother}
      >
        <div className="m-3">
          <div className="text-left">
            <p className="m-0" style={{ fontSize: "12px" }}>
              #기술 #개발 #노코드
            </p>
            <p className="ff" style={{ fontSize: "12px" }}>
              March 7, 2021 2:30 PM KST
            </p>

            <h4 className="text-3xl ff font-bold">
              데이터지능 첫 생방송: 코딩없이 AI를 공부할 수 있다고?
            </h4>
            <div
              className="m-0"
              style={{
                display: "flex",
                verticalAlign: "middle",
                fontSize: "12px",
              }}
            >
              <img
                src="https://clublink.to/storage/avatar/bcbc57df.jpeg"
                alt="avatar"
                className="avatar"
              ></img>
              <div>Devrick</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
