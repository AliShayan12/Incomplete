import React from 'react';
import './styling.css';
// import { useState } from 'react';

export default function text(props) {

    return (
        <div className='textfields'>

            <label className="mdc-text-field mdc-text-field--filled mdc-text-field--no-label">
                <span className="mdc-text-field__ripple"></span>
                <input className="mdc-text-field__input" type="text" placeholder={props.title} aria-label="Label" />
                <span className="mdc-line-ripple"></span>
            </label>
            
           
        </div>
    )
}
