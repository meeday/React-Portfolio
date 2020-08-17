import React from "react";
import image from "./image/EmployeeDirectory.png";
import image2 from "./image/EmployeeDirectory2.png";
import image3 from "./image/EmployeeDirectory3.png";
import "../../../styling.css";

export default function EmployeeDirectory() {
  return (
    <>
      <div className="tab-pane text-center gallery" id="favorite2">
        <div className="row c-wrapper justify-content-md-center">
          <h4 style={{ color: "white" }}>Password Generator</h4>
          <ul className="nav nav-pills nav-pills-icons justify-content-center">
            <li className="nav-item">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="nav-link"
                href="https://meeday.github.io/Assignment-week-3/"
              >
                <i style={{ color: "white" }} className="material-icons">
                  public
                </i>
                deployed site
              </a>
            </li>
            <li className="nav-item">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="nav-link"
                href="https://github.com/meeday/Assignment-week-3"
              >
                <i style={{ color: "white" }} className="fa fa-github"></i>
                project repository
              </a>
            </li>
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators2"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators2"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators2"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={image} className="d-block w-100" alt="password" />
                </div>
                <div className="carousel-item">
                  <img src={image2} className="d-block w-100" alt="password" />
                </div>
                <div className="carousel-item">
                  <img src={image3} className="d-block w-100" alt="password" />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-dark"
                  aria-hidden="true"
                ></span>
                <span className="sr-only ">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-dark"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
