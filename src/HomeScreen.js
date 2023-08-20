import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner.js";
import Row from "./Row.js";
import requests from "./requests.js";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav></Nav>
      <Banner></Banner>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isBig="true"
      ></Row>
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isBig="false"
      ></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isBig=""></Row>
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isBig="false"
      ></Row>
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isBig="false"
      ></Row>
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isBig="false"
      ></Row>
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isBig="false"
      ></Row>
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isBig="false"
      ></Row>
    </div>
  );
}

export default HomeScreen;
