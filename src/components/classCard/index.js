import React from 'react';
import './styles.css';

import plusIcon from '../../assets/plusIcon.png'
import minusIcon from '../../assets/minusIcon.png'
import naIcon from '../../assets/naIcon.png'

function ClassCard(props){
    return(
        <li className='ClassList'>
            <div className='ClassOverlay'>
                <b className='ClassTitle'>{props.title}</b>
                <b className='ClassQuali'>QUALIFICAÇÃO DOS QUESTIONÁRIOS</b>
                <div className='ClassRating'>
                    <img src={plusIcon} className='ClassRatingIcon'></img>
                    <img src={plusIcon} className='ClassRatingIcon'></img>
                    <img src={plusIcon} className='ClassRatingIcon'></img>
                    <img src={naIcon} className='ClassRatingIcon'></img>
                    <img src={minusIcon} className='ClassRatingIcon'></img>
                </div>
                <b className='ClassPercent'>{props.percentage}%</b>
                <b className='ClassStatus'>{props.qualified}</b>
            </div>
        </li>
        
    )
}

export default ClassCard;