import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function QuestionarioModal(props) {
  const portalRoot = document.getElementById("portal-root");

  function closeHandler(e) {
    if (e.target.id === props.id) {
      props.onClose();
    }
  }

  function inputHandler(e) {
    const id = "Answer" + e.target.id;
    console.log(id);
    document.getElementById(id).checked = true;
  }

  return ReactDOM.createPortal(
    <div
      className="QuestionarioModalOverlay"
      id={props.id}
      onClick={closeHandler}
    >
      <div className="QuestionarioModal">
        <b className="QuestionarioModalTitle">Questão 1</b>
        <div className="QuestionarioModalQuestion">
          <b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            mollis magna in enim finibus, sit amet tincidunt lectus porta. Fusce
            sed justo ipsum. Etiam lacus nibh, laoreet id urna eu, convallis
            vehicula lectus. Proin pellentesque vehicula quam vitae pharetra.
            Donec ut fringilla leo, at dignissim odio. Maecenas condimentum
            maximus sem, at aliquam nulla viverra quis. Curabitur auctor lorem
            at odio euismod, quis sagittis orci ultricies. Duis et nibh id
            sapien tincidunt semper.
          </b>
        </div>
        <ul className="QuestionarioModalOptions">
          <li>
            <input
              id="Answer1"
              type="radio"
              name="radioInput"
              className="QuestionarioModalAnswerInp"
            ></input>
            <div
              id="1"
              onClick={inputHandler}
              className="QuestionarioModalAnswer"
            >
              <b id="1" onClick={inputHandler}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                tortor nisi, elementum et nulla quis, fringilla vehicula purus.
                Nunc malesuada.
              </b>
            </div>
          </li>
          <li>
            <input
              id="Answer2"
              type="radio"
              name="radioInput"
              className="QuestionarioModalAnswerInp"
            ></input>
            <div
              id="2"
              onClick={inputHandler}
              className="QuestionarioModalAnswer"
            >
              <b id="2" onClick={inputHandler}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                tortor nisi, elementum et nulla quis, fringilla vehicula purus.
                Nunc malesuada.
              </b>
            </div>
          </li>
          <li>
            <input
              id="Answer3"
              type="radio"
              name="radioInput"
              className="QuestionarioModalAnswerInp"
            ></input>
            <div
              id="3"
              onClick={inputHandler}
              className="QuestionarioModalAnswer"
            >
              <b id="3" onClick={inputHandler}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                tortor nisi, elementum et nulla quis, fringilla vehicula purus.
                Nunc malesuada.
              </b>
            </div>
          </li>
          <li>
            <input
              id="Answer4"
              type="radio"
              name="radioInput"
              className="QuestionarioModalAnswerInp"
            ></input>
            <div
              id="4"
              onClick={inputHandler}
              className="QuestionarioModalAnswer"
            >
              <b id="4" onClick={inputHandler}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                tortor nisi, elementum et nulla quis, fringilla vehicula purus.
                Nunc malesuada.
              </b>
            </div>
          </li>
          <li>
            <input
              id="Answer5"
              type="radio"
              name="radioInput"
              className="QuestionarioModalAnswerInp"
            ></input>
            <div
              id="5"
              onClick={inputHandler}
              className="QuestionarioModalAnswer"
            >
              <b id="5" onClick={inputHandler}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                tortor nisi, elementum et nulla quis, fringilla vehicula purus.
                Nunc malesuada.
              </b>
            </div>
          </li>
        </ul>
        <div className="QuestionarioModalConfirm">
          <button>CONFIRMAR</button>
        </div>
      </div>
    </div>,
    portalRoot
  );
}

export default QuestionarioModal;
