import React from "react";
import "./styles.css";

function VideoPreviewMainPage(props) {
  if (props.percentage >= 80) {
    var percentageClass = "videoPercentageAccept";
  } else {
    percentageClass = "videoPercentage";
  }

  return (
    <li className="VideoPreviewMainPage">
      <div>
        <button style={{ backgroundImage: "url(" + props.image + ")" }}>
          <img alt="PlayButton" id="lock" src={props.button}></img>
        </button>
        <b className="videoTitle"> {props.title} </b>
        <div>
          <b className="videoDescription"> {props.description} </b>
          <b className={percentageClass}> {props.percentage}% </b>
        </div>
      </div>
    </li>
  );
}

export default VideoPreviewMainPage;
