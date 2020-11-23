import React from "react";
import Header from "../../components/header";
import VideoPreviewAulas from "../../components/videoPreviewAulas";
import data from "../../videoData";
import "./styles.css";

import playButton from "../../assets/playButton.png";
import lockButton from "../../assets/lockButton.png";

function Aulas() {
  const Aulas = data.map((video) => (
    <VideoPreviewAulas
      key={video.id}
      title={video.title}
      description={video.description}
      percentage={video.percentage}
      button={video.isLocked ? lockButton : playButton}
      image={null}
    />
  ));

  return (
    <div className="Aulas">
      <Header />
      <div className="AulasBody">
        <b className="AulasTitle">Aulas</b>
        <div className="AulasOverlay">
          <ul className="AulasOverlayUl">{Aulas}</ul>
        </div>
      </div>
    </div>
  );
}

export default Aulas;
