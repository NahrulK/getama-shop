import React from "react";
import ReactTyped from "react-typed";
import "./directory.css";

const Directory = (props) => {
  return (
    <div className="directory-wrapper">
      <div className="main-info-directory">
        <h1 className="text-uppercase font-weight-bold">Jual Genteng Online</h1>
        <ReactTyped
          className="typed-text text-uppercase fst-italic"
          strings={[
            "Se;amat datang",
            "Kami jual berbagai macam jenis genteng",
            "Bakan batu bata",
            "Tanah Liat",
          ]}
          typeSpeed={40}
          backSpeed={60}
        />
        <div className="btn-main-offer">
          <a href="" className=" btn btn-danger">
            Genteng
          </a>
          <a href="" className=" btn btn-primary">
            Batu Bata
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
