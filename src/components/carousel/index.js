import React from "react";
import NavPils from "../navPills/index";
import MusicApp from "./MusicApp/index";
import Weather from "./WeatherDashboard/index";
import EmployeeDirectory from "./EmployeeDirectory/index";
import GetGrub from "./GetGrub/index";
import NoteTaker from "./noteTaker/index";
import EmployeeTracker from "./EmployeeTracker/index";
import "../../styling.css";

export default function Carousel() {
  return (
    <>
    <NavPils />
    <div id="portfolio" className="tab-content tab-space">
      <MusicApp />
      <Weather />
      <EmployeeDirectory />
      <GetGrub />
      <NoteTaker />
      <EmployeeTracker />
    </div>
      </>
  );
}
