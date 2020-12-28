import React, { useState } from "react";
import Youtube from "react-youtube";
import Header from "../../components/header";
import VideoPreview from "../../components/videoPreview";
import data from "../../videoData";
import "./styles.css";

import playButton from "../../assets/playButton.png";
import lockButton from "../../assets/lockButton.png";
import QuestionarioModal from "../../components/questions";
import api from "../../services/api";
import cors from "cors";

function getVideo(){
  console.log("> getVideo:")

  api.get("/lessons", {headers: {authorization: `bearer ${localStorage.getItem("userToken")}`}}).then((res) => {
    console.log(res);
    console.log(res.data);
  })
}

window.addEventListener('load', getVideo());

function Video() {
  const [questModalOn, setQuestModalOn] = useState(false);
  const Videos = data.map((video) => (
    <VideoPreview
      key={video.id}
      title={video.title}
      description={video.description}
      percentage={video.percentage}
      button={video.isLocked ? lockButton : playButton}
      image={null}
    />
  ));

  const opts = {
    height: "585",
    width: "1040",
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  const videoUrl =
    "https://www.youtube.com/watch?v=2g811Eo7K8U&feature=emb_logo&ab_channel=detachedsoul21";
  const videoId = videoUrl.slice(32, 43);

  function onPlayerReady(e) {
    e.target.pauseVideo();
    startInterval(e.target);
  }

  function startInterval(player) {
    let canPause = true;

    setInterval(() => {
      if (player.getPlayerState() === 1) {
        if (Math.floor(player.getCurrentTime()) === 5 && canPause) {
          if (document.fullscreenElement != null) {
            document.exitFullscreen();
          }

          canPause = false;
          player.pauseVideo();
          setQuestModalOn(true);
        }
        if (Math.floor(player.getCurrentTime()) !== 5) {
          canPause = true;
        }
      }
    }, 100);
  }

  return (
    <div className="Video">
      <Header />
      <div className="VideoBody">
        <div className="PlayerOverlay">
          <b className="PlayerVideoAula">Aula 01</b>
          <b className="PlayerVideoTitle">TITULO DA AULA</b>
          <Youtube className="Player" videoId={videoId} opts={opts} onReady={onPlayerReady} />
          <button onClick={() => setQuestModalOn(!questModalOn)}>Test</button>
          {questModalOn ? (
            <QuestionarioModal
              id="overlay"
              onClose={() => setQuestModalOn(false)}
            />
          ) : null}
        </div>
        <div className="VideoListOverlay">
          <b className="VideoListTitle">Aulas</b>
          <ul className="VideoListBack">{Videos}</ul>
        </div>
      </div>
    </div>
  );
}

export default Video;
