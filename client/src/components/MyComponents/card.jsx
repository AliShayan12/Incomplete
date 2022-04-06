import React from 'react';
import './styling.css';



export default function card(props) {
    return (

            <div className="mdc-card All">

                <div className="mdc-card__primary-action subAll">
                    <div className="mdc-card__media mdc-card__media--square">
                        <div className="mdc-card__media-content">{props.title}</div>
                    </div>

                    <div className="mdc-card__ripple">
                        <br /><br />

                        <img src={props.imgsrc} height={200} alt="" />
                        <p><small>{props.description}</small></p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className="mdc-card__actions" >
                    <div className="mdc-card__action-buttons" >
                        <button className="mdc-button mdc-card__action mdc-card__action--button">
                            <div className="mdc-button__ripple" ></div>
                            <span className="mdc-button__label" >Rent Now</span>
                        </button>
                    </div>
                    <div className="mdc-card__action-icons">
                        <label>{props.price}</label>
                    </div>
                </div>

            </div>
       





    )
}
