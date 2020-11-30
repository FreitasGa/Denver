import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./styles.css";

function SideBar(props) {
  const portalRoot = document.getElementById("portal-root");
  const page = document.getElementById("root");
  const button = document.getElementById("container");

  page.addEventListener("click", function () {
    console.log("click2");
    props.onClose();
  });

  button.addEventListener("click", function () {
    console.log("click");
    props.onClose();
  });

  return ReactDOM.createPortal(
    <div className="SideBarOverlay">
      <div className="SideBar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/aulas">Aulas</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </div>
    </div>,
    portalRoot
  );
}

export default SideBar;
