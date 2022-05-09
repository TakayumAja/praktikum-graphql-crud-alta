import React from "react";

// Import Component
import PassengerInput from "../PassengerInput";
import ListPassenger from "../ListPassenger";
import Header from "../Header";

// Import File Css
import "./Home.module.css";
import PassengerInputId from "../PassengerInputId";
import ListPassangerId from "../ListPassengerId";

const Home = () => {
  return (
    <div>
      <Header />
      <ListPassenger />
      <PassengerInput />
      <PassengerInputId />
      <ListPassangerId />
    </div>
  );
};

export default Home;
