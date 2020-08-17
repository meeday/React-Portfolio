import React from "react";
import "../../styling.css";

export default function NavPills() {
  return (
    <>
    <br/>
      <h3 style={{textAlign: "center", color: "white"}}>Projects</h3>
      <div className="row">
        <div className="col-md-6 ml-auto mr-auto">
          <div className="profile-tabs">
            <ul
              className="nav nav-pills nav-pills-icons justify-content-center"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#favorite1"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="material-icons iconStyle">stars</i>
                  Weather Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#project"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="material-icons iconStyle">stars</i>
                  The Music App
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#favorite2"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="material-icons iconStyle">stars</i>
                  Employee Directory
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#project2"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="material-icons iconStyle">stars</i>
                  Get Grub
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#favorite3"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="material-icons iconStyle">stars</i>
                  Note Taker
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#favorite4"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="material-icons iconStyle">stars</i>
                  Employee Tracker
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
