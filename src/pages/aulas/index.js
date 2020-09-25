import React from 'react';
import Header from '../../components/header';
import './styles.css';

import playButton from '../../assets/playButton.png'

function Aulas(){
    return(
        <div className='Aulas'>
            <Header/>
            <div className='AulasBody'>
                <b className='AulasTitle'>Aulas</b>
                <div className='AulasOverlay'>
                    <ul id='videoContainer'>
                        <li><div><button><img alt="PlayButton" src={playButton}></img></button><div><b className='AulasVideoTitle'>Aula 01</b><b className='AulasVideoDescription'>Descrição da Aula</b><b className='AulasVideoPercentage'>60%</b></div></div></li>
                        <li><div><button><img alt="PlayButton" src={playButton}></img></button><div><b className='AulasVideoTitle'>Aula 01</b><b className='AulasVideoDescription'>Descrição da Aula</b><b className='AulasVideoPercentage'>60%</b></div></div></li>
                        <li><div><button><img alt="PlayButton" src={playButton}></img></button><div><b className='AulasVideoTitle'>Aula 01</b><b className='AulasVideoDescription'>Descrição da Aula</b><b className='AulasVideoPercentage'>60%</b></div></div></li>
                        <li><div><button><img alt="PlayButton" src={playButton}></img></button><div><b className='AulasVideoTitle'>Aula 01</b><b className='AulasVideoDescription'>Descrição da Aula</b><b className='AulasVideoPercentage'>60%</b></div></div></li>
                        <li><div><button><img alt="PlayButton" src={playButton}></img></button><div><b className='AulasVideoTitle'>Aula 01</b><b className='AulasVideoDescription'>Descrição da Aula</b><b className='AulasVideoPercentage'>60%</b></div></div></li>
                        <li><div><button><img alt="PlayButton" src={playButton}></img></button><div><b className='AulasVideoTitle'>Aula 01</b><b className='AulasVideoDescription'>Descrição da Aula</b><b className='AulasVideoPercentage'>60%</b></div></div></li>
                        <li><div><button><img alt="PlayButton" src={playButton}></img></button><div><b className='AulasVideoTitle'>Aula 01</b><b className='AulasVideoDescription'>Descrição da Aula</b><b className='AulasVideoPercentage'>60%</b></div></div></li>
                        <li><div><button><img alt="PlayButton" src={playButton}></img></button><div><b className='AulasVideoTitle'>Aula 01</b><b className='AulasVideoDescription'>Descrição da Aula</b><b className='AulasVideoPercentage'>60%</b></div></div></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Aulas;