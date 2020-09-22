import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import logoAzul from '../../assets/LogoAzul.png';

function Login() {
    return(
        <div className='Login'>
            <div className='loginForms'>
                <img alt='logo' src={logoAzul}></img>
                <ul>
                    <li><div><input type='email' placeholder='E-MAIL'></input></div></li>
                    <li><div><input type='password' placeholder='SENHA'></input></div></li>
                </ul>
                <button>FINALIZAR</button>
                <Link to='/register' className='toRegister'>Não tem uma conta? Cadastre-se!</Link>
                <Link to='/' className='toRegister'>Esqueçeu sua senha?</Link>
            </div>
        </div>
    )
}

export default Login;