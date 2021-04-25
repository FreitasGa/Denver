import React, { useState, useCallback, useEffect } from "react";
import { useParams } from 'react-router-dom';
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


function Aula() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const params = useParams();
  
  const getVideo = useCallback(() => {
    const userToken = localStorage.getItem("userToken");
    api.get(`/lessons/${params.id}`, {headers: {authorization: `bearer ${userToken}`}}).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
      setVideo(res.data.video);
    })
  }, []);
  
  useEffect(() => { getVideo(); } , [getVideo]);

  const [questModalOn, setQuestModalOn] = useState(false);
  /*const Videos = lessons.map((video) => (
    <VideoPreview
      key={video.id}
      title={video.title}
      description={video.description}
      percentage={video.percentage}
      button={video.isLocked ? lockButton : playButton}
      image={null}
    />
  ));*/

  const opts = {
    height: "585",
    width: "1040",
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  const videoId = video.slice(17, 28);

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
          <b className="PlayerVideoAula">{title}</b>
          <b className="PlayerVideoTitle">{description}</b>
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
          <ul className="VideoListBack">a</ul>
        </div>
      </div>
    </div>
  );
}

export default Aula;
