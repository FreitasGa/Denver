import React from "react";
import "./styles.css";

import plusIcon from "../../assets/plusIcon.png";
import minusIcon from "../../assets/minusIcon.png";
import naIcon from "../../assets/naIcon.png";

function ClassCard(props) {
  switch (props.quest1) {
    case 0:
      var Quest1 = naIcon;
      break;
    case 1:
      Quest1 = minusIcon;
      break;
    case 2:
      Quest1 = plusIcon;
      break;
    default:
      break;
  }

  switch (props.quest2) {
    case 0:
      var Quest2 = naIcon;
      break;
    case 1:
      Quest2 = minusIcon;
      break;
    case 2:
      Quest2 = plusIcon;
      break;
    default:
      break;
  }

  switch (props.quest3) {
    case 0:
      var Quest3 = naIcon;
      break;
    case 1:
      Quest3 = minusIcon;
      break;
    case 2:
      Quest3 = plusIcon;
      break;
    default:
      break;
  }

  switch (props.quest4) {
    case 0:
      var Quest4 = naIcon;
      break;
    case 1:
      Quest4 = minusIcon;
      break;
    case 2:
      Quest4 = plusIcon;
      break;
    default:
      break;
  }

  switch (props.quest5) {
    case 0:
      var Quest5 = naIcon;
      break;
    case 1:
      Quest5 = minusIcon;
      break;
    case 2:
      Quest5 = plusIcon;
      break;
    default:
      break;
  }

  if (props.percentage >= 80) {
    var percentageClass = "ClassPercentAccept";
    var statusClass = "ClassStatusAccept";
  } else {
    percentageClass = "ClassPercent";
    statusClass = "ClassStatus";
  }

  return (
    <li className="ClassList">
      <div className="ClassOverlay">
        <b className="ClassTitle">{props.title}</b>
        <b className="ClassQuali">QUALIFICAÇÃO DOS QUESTIONÁRIOS</b>
        <div className="ClassRating">
          <img src={Quest1} className="ClassRatingIcon"></img>
          <img src={Quest2} className="ClassRatingIcon"></img>
          <img src={Quest3} className="ClassRatingIcon"></img>
          <img src={Quest4} className="ClassRatingIcon"></img>
          <img src={Quest5} className="ClassRatingIcon"></img>
        </div>
        <b className={percentageClass}>{props.percentage}%</b>
        <b className={statusClass}>{props.qualified}</b>
      </div>
    </li>
  );
}

export default ClassCard;
