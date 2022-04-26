import React from "react";

// Import Component
import PassengerInput from "../PassengerInput";
import ListPassenger from "../ListPassenger";
import Header from "../Header";

// Import File Css
import "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Header />
      <ListPassenger />
      <PassengerInput />
    </div>
  );
};

export default Home;
