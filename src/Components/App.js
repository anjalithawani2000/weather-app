import React from "react";
import ReactDOM from "react-dom/client";
import RightSideInfo from "./RightSideInfo";
import SideInfo from "./SideInfo";
import { WeatherProvider } from "../Context/weather-context";

const AppLayout = () => {
  return (
    <div className="app">
      <WeatherProvider>
        <RightSideInfo />
        <SideInfo />
      </WeatherProvider>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);