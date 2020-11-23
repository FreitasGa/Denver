import React from "react";
import Header from "../../components/header";
import "./styles.css";

function Questionario() {
  return (
    <div className="Questionario">
      <Header />
      <div className="QuestionarioBody">
        <b className="QuestionarioTitle">Questão 1</b>
        <div className="QuestionarioQuestion">
          <b>Some text</b>
        </div>
        <ul className="QuestionarioOptions">
          <li>
            <input
              type="radio"
              name="radioInput"
              className="QuestionarioAnswerInp"
            ></input>
            <div className="QuestionarioAnswer">
              <b>Some text</b>
            </div>
          </li>
          <li>
            <input
              type="radio"
              name="radioInput"
              className="QuestionarioAnswerInp"
            ></input>
            <div className="QuestionarioAnswer">
              <b>Some text</b>
            </div>
          </li>
          <li>
            <input
              type="radio"
              name="radioInput"
              className="QuestionarioAnswerInp"
            ></input>
            <div className="QuestionarioAnswer">
              <b>Some text</b>
            </div>
          </li>
          <li>
            <input
              type="radio"
              name="radioInput"
              className="QuestionarioAnswerInp"
            ></input>
            <div className="QuestionarioAnswer">
              <b>Some text</b>
            </div>
          </li>
          <li>
            <input
              type="radio"
              name="radioInput"
              className="QuestionarioAnswerInp"
            ></input>
            <div className="QuestionarioAnswer">
              <b>Some text</b>
            </div>
          </li>
        </ul>
        <div className="QuestionarioConfirm">
          <button>CONFIRMAR</button>
        </div>
      </div>
    </div>
  );
}

export default Questionario;
