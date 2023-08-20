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
        isBig=""
      ></Row>
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isBig=""
      ></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isBig=""></Row>
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isBig=""
      ></Row>
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isBig=""
      ></Row>
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isBig=""
      ></Row>
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isBig=""
      ></Row>
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isBig=""
      ></Row>
    </div>
  );
}

export default HomeScreen;
