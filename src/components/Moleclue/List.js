import React, { useEffect } from "react";
// import "./main.css";
import { Link } from "react-router-dom";
import logo from "./logo192.png";

const List = () => {
  //   const [info, setInfo] = useState([]);

  //   const loadInfos = async () => {
  //     await axios({
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       url: `https://z5v2zc0s9i.execute-api.ap-northeast-2.amazonaws.com/production/getLifeInfo`,
  //       //   url: `https://nxqs16xalf.execute-api.ap-northeast-2.amazonaws.com/default/sgMarket?cat=1`,
  //     }).then((res) => {
  //       setInfo(res.data);
  //       console.log(res.data);
  //     });
  //     // return result.data;
  //     // console.log(result);
  //     // setInfo(result.data);
  //     // console.log(info);
  //   };

  useEffect(() => {
    // loadInfos();
  }, []);

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">글리버리와 함께하는 클럽하우스</h5>
            <p className="card-text">
              오늘의 주제: 과연 우리는 좋은 사람들이 될 수 있을까?
            </p>
            <img src="./logo192.png" alt="..." className="rounded-circle"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
