import React from "react";
import TopNavBar from "../Navbar/TopNavBar";
import Filter from "../Atom/Filter";
import List from "../Moleclue/List";

const Add = () => {
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
          <form>
            <p className="text-center" style={{ fontSize: "15px" }}>
              초대링크를 붙여넣고, 검토하기!
            </p>

            <input
              type="search"
              name="q"
              className="bg-purple-white bg-gray-200 shadow rounded border-0 p-3 w-100 mt-0"
              placeholder="event link url"
              id="box"
            />
            <button className="bg-gray-500 rounded border-0 w-100 p-3 mt-3">
              Validate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
