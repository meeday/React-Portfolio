import React from "react";
import AboutMe from "../aboutMe/index";
import Carousel from "../carousel/index";
import Footer from "../footer/index";
import "../../styling.css";

export default function Profile() {
  return (
    <div className="content-raised content">
      <>
        <AboutMe />
        <Carousel />
        <Footer />
      </>
    </div>
  );
}
