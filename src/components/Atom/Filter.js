import React from "react";
import "./box.css";

const Filter = () => {
  return (
    <div className="w-full md:w-5/6 mx-auto bg-white p-4 rounded-md shadow-lg mt-5">
      <p className="text-left text-xl ff font-semibold mb-1">
        재미있는 이벤트 찾기
      </p>{" "}
      <div className="w-full">
        <form method="GET">
          <input
            type="search"
            name="q"
            className="bg-purple-white bg-gray-200 shadow rounded border-0 p-3 w-75 mt-2"
            placeholder="search"
            id="box"
          />
          <button className="bg-gray-500 rounded border-0 w-25 p-3">
            검색
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
