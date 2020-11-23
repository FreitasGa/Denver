import React, { useState } from "react";
import Header from "../../components/header";
import ClassCard from "../../components/classCard";
import ProgressRing from "../../components/progressRing";
import PerfilEditModal from "../../components/emailModal";

import data from "../../videoData";
import user from "../../userData";
import "./styles.css";

import perfilPreview2x from "../../assets/perfilPreview-2x.png";
import emailEditor from "../../assets/emailEditor.png";

function Perfil() {
  const [perfilEditOn, setPerfilEditOn] = useState(false);

  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].isQualified) {
      count++;
    }
  }

  const totalPercentage = (count / data.length) * 100;

  const ClassCards = data.filter((card) => card.isSeen);

  const filteredClassCards = ClassCards.map((video) => (
    <ClassCard
      key={video.id}
      title={video.title}
      percentage={video.percentage}
      qualified={video.isQualified ? "QUALIFICADO" : "NÃO QUALIFICADO"}
      quest1={video.Quest1}
      quest2={video.Quest2}
      quest3={video.Quest3}
      quest4={video.Quest4}
      quest5={video.Quest5}
      isSeen={video.isSeen}
    />
  ));

  return (
    <div className="Perfil">
      <Header />
      <div className="PerfilBody">
        <b className="PerfilTitle">Perfil</b>
        <div className="PerfilOverlay">
          <div className="PartA">
            <div className="PerfilImageCropper">
              <img
                onClick={() => setPerfilEditOn(true)}
                alt="perfil"
                src={user.Image}
                className="PerfilImage"
              ></img>
            </div>
            {perfilEditOn ? (
              <PerfilEditModal
                id="overlay"
                name={user.name}
                surname={user.surname}
                mail={user.mail}
                onClose={() => setPerfilEditOn(false)}
              />
            ) : null}
            <b className="UserName">{user.name}</b>
            <div>
              <b className="UserEmail">{user.mail}</b>
              <img
                onClick={() => setPerfilEditOn(true)}
                alt="email-editor"
                src={emailEditor}
                className="emailEditor"
              ></img>
            </div>
            <div className="Line"></div>
            <b className="ProgressTitle">PROGRESSO</b>
            <ProgressRing
              size={200}
              progress={totalPercentage}
              strokeWidth={18}
              circleOneStroke="#B5B5B5"
              circleTwoStroke="#00A2D8"
            />
            <b className="ProgressDescription">Aulas Concluídas</b>
          </div>
          <div className="Line2"></div>
          <div className="PartB">
            <b className="HistoricTitle">HISTÓRICO DE AULAS</b>
            <ul>{filteredClassCards}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
