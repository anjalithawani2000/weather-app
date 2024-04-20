import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import SideInfo from "./SideInfo";
import { WeatherProvider } from "../Context/weather-context";

const AppLayout = () => {
  return (
    <div className="app">
      <WeatherProvider>
        <Header />
        <SideInfo />
      </WeatherProvider>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);