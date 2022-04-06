import React from 'react'
import './styling.css';

export default function button(props) {
    let button1;
    if (props.title === 'Rent your Products')
        button1 = 'R1';
    else if (props.title === 'Create new Account')
        button1 = 'C1';
    else
        button1 = 'L1';
    return (
        <div className={button1}>
            <div className='buttons' >
                <button className="mdc-button mdc-button--raised button button">
                    <span className="mdc-button__label">{props.title}</span>
                </button>
            </div>
        </div>
    )
}
