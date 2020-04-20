import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import { Container } from "reactstrap";
import style from "./MainPage.module.css";
import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <div className={style.container}>
      <Header />
      <Feed />
    </div>
  );
};

export default MainPage;
