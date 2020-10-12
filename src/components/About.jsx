import React from "react";
import image from "../images/jianyang.jpg";

export const About = () => {
  return (
    <>
      <div>
        <h3 style={{ textAlign: "center", paddingTop: "20px" }}>
          This is our CEO Jian Yang<span role="img" aria-label="">❤️</span>
        </h3>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <img
                className="img-fluid"
                src={image}
                alt="jian yang"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
