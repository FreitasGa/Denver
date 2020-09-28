import React, { useEffect, useState, useRef } from 'react';
import './styles.css';

function ProgressRing(props){

    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);

    const center = props.size / 2;
    const radius = (props.size / 2) - (props.strokeWidth / 2);
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - props.progress) / 100 ) * circumference;
        setOffset(progressOffset);

        circleRef.current.style = 'transition: stroke-dashoffset 1000ms ease-in-out ';

    }, [setOffset, props.progress, circumference, offset] );

    return(
        <div className='ProgressRing'>
            <svg className='circular-chart' width={props.size} height={props.size}>
                <circle className='circular-bg' stroke={props.circleOneStroke} cx={center} cy={center} r={radius} strokeWidth={props.strokeWidth}></circle>
                <circle className='circle' ref={circleRef} stroke={props.circleTwoStroke} cx={center} cy={center} r={radius} strokeWidth={props.strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} ></circle>
                <text className='percentage' x={center} y={center}>
                    {props.progress}%
                </text>
            </svg>
        </div>
    )
}

export default ProgressRing;