import React from "react";
import "./box.css";

const Filter = () => {
  return (
    <div className="container mt-3 pt-5">
      좋은 클럽하우스 초대장을 나눠보려합니다.
      <div className="box">
        <form className="row row-cols-lg-auto g-10 align-items-center">
          <label className="visually-hidden" for="inlineFormInputGroupUsername">
            Username
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-ml"
              placeholder="검색하기"
            />
          </div>

          {/* <div className="col-12">
            <button type="submit" className="btn btn-success">
              검색하기
            </button>
          </div> */}
        </form>{" "}
      </div>
    </div>
  );
};

export default Filter;
