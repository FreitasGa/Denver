import React from 'react';
import ReactDOM from 'react-dom'
import './styles.css';

function QuestionarioModal(props){

    const portalRoot = document.getElementById("portal-root");

    function closeHandler(e){
        if (e.target.id === props.id) {
            props.onClose();
        }
    }

    return ReactDOM.createPortal(
        <div className='QuestionarioModalOverlay' id={props.id} onClick={closeHandler}>
            <div className='QuestionarioModal'>
                <b className='QuestionarioModalTitle'>Questão 1</b>
                <div className='QuestionarioModalQuestion'>
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis magna in enim finibus, sit amet tincidunt lectus porta. Fusce sed justo ipsum. Etiam lacus nibh, laoreet id urna eu, convallis vehicula lectus. Proin pellentesque vehicula quam vitae pharetra. Donec ut fringilla leo, at dignissim odio. Maecenas condimentum maximus sem, at aliquam nulla viverra quis. Curabitur auctor lorem at odio euismod, quis sagittis orci ultricies. Duis et nibh id sapien tincidunt semper.</b>
                </div>
                <ul className='QuestionarioModalOptions'>
                    <li><input type='radio' name='radioInput' className='QuestionarioModalAnswerInp'></input><div className='QuestionarioModalAnswer'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor nisi, elementum et nulla quis, fringilla vehicula purus. Nunc malesuada.</b></div></li>
                    <li><input type='radio' name='radioInput' className='QuestionarioModalAnswerInp'></input><div className='QuestionarioModalAnswer'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor nisi, elementum et nulla quis, fringilla vehicula purus. Nunc malesuada.</b></div></li>
                    <li><input type='radio' name='radioInput' className='QuestionarioModalAnswerInp'></input><div className='QuestionarioModalAnswer'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor nisi, elementum et nulla quis, fringilla vehicula purus. Nunc malesuada.</b></div></li>
                    <li><input type='radio' name='radioInput' className='QuestionarioModalAnswerInp'></input><div className='QuestionarioModalAnswer'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor nisi, elementum et nulla quis, fringilla vehicula purus. Nunc malesuada.</b></div></li>
                    <li><input type='radio' name='radioInput' className='QuestionarioModalAnswerInp'></input><div className='QuestionarioModalAnswer'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor nisi, elementum et nulla quis, fringilla vehicula purus. Nunc malesuada.</b></div></li>
                </ul>
                <div className='QuestionarioModalConfirm'>
                    <button>CONFIRMAR</button>
                </div>
            </div>
        </div>,
        portalRoot,
    )
}

export default QuestionarioModal;