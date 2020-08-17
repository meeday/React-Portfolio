import React from "react";
import image from "./image/me.jpeg";
import "../../styling.css";

export default function AboutMe() {
  return (
    <div id="about" className="profile">
      <div className="avatar">
        <img
          src={image}
          alt="Circle"
          className="img-raised rounded-circle img-fluid"
        />
      </div>
      <div className="name">
        <h3 className="title">Meedaxa Ahmed</h3>
        <h6>Full-stack Web Developer</h6>
        <ul className="nav nav-pills nav-pills-icons justify-content-center">
          <li className="nav-item">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="nav-link"
              href="https://github.com/meeday"
            >
              <i className="fa fa-github" style={{ color: "white" }}></i>
              github profile
            </a>
          </li>
          <li className="nav-item">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="nav-link"
              href="https://www.linkedin.com/in/meedaxaahmed/"
            >
              <i className="fa fa-linkedin" style={{ color: "white" }}></i>
              linkedin profile
            </a>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              className="nav-link"
              href="./assets/Resume-Meedaxa-Ahmed.pdf"
            >
              <i className="fa fa-file-pdf-o" style={{ color: "white" }}></i>
              resume
            </a>
          </li>
        </ul>
      </div>
      <br />
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <p style={{ color: "white" }}>
            <i className="fa fa-envelope" style={{ color: "white" }}></i>
            meedaxa.ahmed@gmail.com
          </p>
        </li>
        <li className="nav-item">
          <p style={{ color: "white", marginLeft: 20 + "px" }}>
            <i className="fa fa-phone" style={{ color: "white" }}></i>
            +44 7498 35 34 36
          </p>
        </li>
      </ul>
      <br />
      <div className="description text-center">
        <p>
          Full-stack developer with constantly expanding knowledge in HTML, CSS
          and Javascript, node.js.
        </p>
        <p>
          Background in Marketing and management allows me to utilise my coding
          skills to make more customer-oriented web applications.
        </p>
      </div>
    </div>
  );
}
