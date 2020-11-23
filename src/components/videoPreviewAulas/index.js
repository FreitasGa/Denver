import React from "react";
import "./styles.css";

function VideoPreviewAulas(props) {
  if (props.percentage >= 80) {
    var percentageClass = "AulasVideoPercentageAccept";
  } else {
    percentageClass = "AulasVideoPercentage";
  }

  return (
    <li className="VideoPreviewAulas">
      <div>
        <button style={{ backgroundImage: "url(" + props.image + ")" }}>
          <img alt="PlayButton" src={props.button}></img>
        </button>
        <div>
          <b className="AulasVideoTitle"> {props.title} </b>
          <b className="AulasVideoDescription"> {props.description} </b>
          <b className={percentageClass}> {props.percentage}% </b>
        </div>
      </div>
    </li>
  );
}

export default VideoPreviewAulas;
