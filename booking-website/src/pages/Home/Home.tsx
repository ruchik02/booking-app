import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/propertyList";
import React from "react";
import "./home.css";
import FeaturedProperty from "../../components/featuredProperty/FeaturedProperty";
import MailList from "../../components/mailList/MailList";
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header type={""} />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browser by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperty />
        <MailList />
      </div>
    </React.Fragment>
  );
};

export default Home;
