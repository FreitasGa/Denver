import React, { useRef, useEffect, useState } from "react";
import Header from "../../components/header";
import VideoPreviewMainPage from "../../components/videoPreview_MainPage";
import user from "../../userData";
import cors from "cors";
import api from "../../services/api";
import "./styles.css";

import image from "../../assets/image.png";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import playButton from "../../assets/playButton.png";
import lockButton from "../../assets/lockButton.png";

var data;

function getUserData(){
  const userToken = localStorage.getItem("userToken");
  api.get("/users/currentuser", {headers: {authorization: `bearer ${userToken}`}}).then((res) => {
    localStorage.setItem("username", res.data.name);
    localStorage.setItem("useremail", res.data.email);
  })
}

function getVideoData(){
  const userToken = localStorage.getItem("userToken");  

  api.get("/lessons", {headers: {authorization: `bearer ${userToken}`}}).then((res) => {
    data = res.data;
    console.log(data);
  });
}

function MainPage() {
  useEffect(() => {getUserData()},[getUserData]);
  useEffect(() => {getVideoData()},[getVideoData]);

  const userName = localStorage.getItem("username");

  function goToLeft() {
    document.getElementById("videoContainer").scrollLeft -= 276;
  }

  function goToRight() {
    document.getElementById("videoContainer").scrollLeft += 276;
  }

  /*const VideosMainPage = data.map((video) => (
    <VideoPreviewMainPage
      key={video.id}
      title={video.title}
      description={video.description}
      percentage={video.percentage}
      button={video.isLocked ? lockButton : playButton}
      image={null}
    />
  ));*/

  return (
    <div className="MainPage">
      <Header />
      <div className="MainPageBody">
        <div className="greetings">
          <b className="greet">Bem vindo, {userName}.</b>
          <b className="mainText">Seja o próprio terapeuta do seu filho!</b>
          <b className="subText">
            Aprenda como realizar terapia ocupacional utilizando o Modelo Denver
            para o desenvolvimento cognitivo da criança autista.
          </b>
        </div>
        <div className="images">
          <img className="image" alt="kids" src={image}></img>
        </div>
      </div>
      <div className="videoBack">
        <button id="slideLeft" className="slideLeft" onClick={goToLeft}>
          <img alt="previous" src={leftArrow}></img>
        </button>
        <ul id="videoContainer">:)</ul>
        <button id="slideRight" className="slideRight" onClick={goToRight}>
          <img alt="next" src={rightArrow}></img>
        </button>
      </div>
    </div>
  );
}

export default MainPage;
