import React from "react";
import video from "./video/Demo.webm";
import "../../../styling.css";

export default function EmployeeTracker() {
  return (
    <>
      <div className="tab-pane text-center gallery" id="favorite4">
        <div className="row c-wrapper justify-content-md-center">
          <h4 style={{color: "white"}}>Employee Tracker</h4>
          <ul className="nav nav-pills nav-pills-icons justify-content-center">
            <li style={{justifyContent: "center"}} className="nav-item">
              <a
              rel="noopener noreferrer"
                target="_blank"
                className="nav-link"
                href="https://github.com/meeday/Employee-Tracker"
              >
                <i style={{color: "white"}} className="fa fa-github"></i>
                project repository
              </a>
            </li>
            <div className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video className="d-block w-100" controls>
                    <source
                      src={video}
                      type="video/webm"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
