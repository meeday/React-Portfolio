import React from "react";
import image from "./image/The Music App.png";
import image1 from "./image/The Music App2.png";
import image2 from "./image/The Music App3.png";
import "../../../styling.css";

export default function MusicApp() {
  return (
    <>
      <div className="tab-pane text-center gallery" id="project">
        <div className="row c-wrapper justify-content-md-center">
          <h4 style={{color: "white"}}>Project 1: The Music App</h4>
          <ul className="nav nav-pills nav-pills-icons justify-content-center">
            <li className="nav-item">
              <a
              rel="noopener noreferrer"
                target="_blank"
                className="nav-link"
                href="https://meeday.github.io/The-Music-App/"
              >
                <i style={{color: "white"}} className="material-icons">
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
                href="https://github.com/meeday/The-Music-App"
              >
                <i style={{color: "white"}} className="fa fa-github"></i>
                project repository
              </a>
            </li>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={image}
                    className="d-block w-100"
                    alt="music-app"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image1}
                    className="d-block w-100"
                    alt="music-app"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={image2}
                    className="d-block w-100"
                    alt="music-app"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
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
