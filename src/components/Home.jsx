import React from "react";
import home from "../images/home.svg";
import { Link } from "react-router-dom";

import useWebAnimations from "@wellyshen/use-web-animations";

export const Home = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0px)" },
      { transform: "translateY(40px)" },
    ],
    timing: {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  return (
    <>
      <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 mt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    Grow your bussiness with{" "}
                    <strong className="brand-name">Jian Yang</strong>
                  </h1>
                  <h2 className="my-3">We are a team of sleep deprived coders!</h2>
                  <div className="mt-3">
                    <Link to="/" className="btn-get-started">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div ref={ref} className="col-lg-6 mt-3 order-1 order-lg-2 header-img">
                  <img
                    src={home}
                    className="img-fluid animate"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
