import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "./add.css";
import "moment/locale/ko";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  LivejournalIcon,
} from "react-share";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { CopyToClipboard } from "react-copy-to-clipboard";

const EventDetail = () => {
  const url = window.location.href;
  const [events, setEvents] = useState({
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
  // const {
  //   title,
  //   weekday,
  //   moderators,
  //   moderatorsArray,
  //   images,
  //   description,
  //   datetime,
  //   club,
  // } = events; // 비구조화 할당을 통해 값 추출

  let history = useHistory();
  const { id } = useParams();
  // const back = () => {
  //   history.push("/");
  // };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: `https://ddjw33n2b0.execute-api.ap-northeast-2.amazonaws.com/production/queryDetailEvent?eventID=${id}`,
    }).then((res) => {
      // console.log(res.data[0]);
      setEvents({
        ...events,
        title: res.data[0].title,
        weekday: res.data[0].weekday,
        images: res.data[0].images,
        description: res.data[0].description,
        club: res.data[0].club,
        moderators: res.data[0].moderators,
        moderatorsArray: res.data[0].moderatorsArray,
        url: res.data[0].url,
        datetimeKorea: res.data[0].datetimeKorea,
      });

      console.log(events);
    });
  };

  const gotoclub = () => {
    window.location.href = "https://ios.joinclubhouse.com/event/M8NOG6q7";
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>페이지에 오신걸 환영해요</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="쇼피랩스 shopeelabs - 쇼피셀러 필수 솔루션"
        />
        <meta
          property="og:description"
          content="쇼피셀러를 위한 모든 툴과 정보를 제공하기 위해서 연구하는 쇼피랩스입니다.쇼피제품판매를 위해 소요되는 시간을 절약하고, 더 잘팔릴 물건을 올릴 수 있도록 돕도록 하겠습니다."
        />
        <meta property="og:site_name" content="쇼피랩스 shopeelabs" />
      </Helmet>

      <div className="container">
        <div onClick={gotoclub} style={{ cursor: "pointer" }}>
          <div className="templetebox">
            <div
              className="w-full mt-3 rounded-md"
              onClick={() => {
                console.log(events.eventCode);
              }}
            >
              <div className="card-body">
                <p className="card-subtext" style={{ fontSize: "12px" }}>
                  {events.datetimeKorea}
                </p>
                <h5 className="card-title" style={{ fontSize: "15px" }}>
                  {events.title}
                </h5>
                {events.images.map((kk, index) => (
                  <div className="avatarbox">
                    <div className="innerbox">
                      <img
                        src={kk}
                        alt="Avatar"
                        width="40px"
                        style={{ borderRadius: "50%", marginLeft: "5px" }}
                      ></img>
                      <div style={{ fontSize: "10px" }}>
                        {events.moderators[index]}
                      </div>
                    </div>
                  </div>
                ))}

                <p className="card-subtext mt-3" style={{ fontSize: "12px" }}>
                  {events.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div style={{ textAlign: "center" }}>Share event</div>

          <div className="sharebox">
            <div className="col50">
              <CopyToClipboard
                text={url}
                onCopy={() => alert("복사되었습니다!")}
              >
                <button>
                  <LivejournalIcon size={38} round />
                </button>
              </CopyToClipboard>
              <div style={{ fontSize: "10px" }}>url복사</div>
            </div>
            <div className="col50">
              <FacebookShareButton
                size={64}
                round={true}
                url={`http://www.goclubhouse.co.kr/event/xe2AOvd3`}
              >
                <FacebookIcon size={38} round />
              </FacebookShareButton>
              <div style={{ fontSize: "10px" }}>facebook</div>
            </div>
            <div className="col50">
              <LinkedinShareButton
                size={64}
                round={true}
                url={`http://www.goclubhouse.co.kr/event/xe2AOvd3`}
              >
                <LinkedinIcon size={38} round />
              </LinkedinShareButton>
              <div style={{ fontSize: "10px" }}>Linkedin</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;

// history.push('/');
// await axios.put(`http://3.35.191.136:3000/users/${id}`, user);
