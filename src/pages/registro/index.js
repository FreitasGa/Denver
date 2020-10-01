import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


function Register() {
    return(
        <div className='Register'>
            <div className='registerForms'>
                <b className='header'>CADASTRO</b>
                <ul>
                    <li><div><b>Nome</b><input type='text' required placeholder='|'></input></div></li>
                    <li><div><b>Sobrenome</b><input type='text' required placeholder='|'></input></div></li>
                    <li><div><b>E-mail</b><input type='email' required placeholder='|'></input></div></li>
                    <li><div><b>Data de nascimento</b><input type='date' required></input></div></li>
                    <li><div><b>Senha</b><input type='password' required placeholder='|'></input></div></li>
                </ul>
                <button type='submit'>FINALIZAR</button>
                <Link to='/login' className='toLogin'>Já possui uma conta? Entre!</Link>
            </div>
        </div>
    )
}

export default Register;