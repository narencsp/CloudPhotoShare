import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react'
import './ShareForm.css'

function ShareForm(props) {

    return (props.triggerShareForm) ? (
        <div className="popup">
            <div className="popup-inner">
            <h4>Popup!</h4>
            </div>
            <button  onClick={() => props.setTriggerShareForm(false)} className="clost-btn">close</button>
        </div>
    ) : "";
}

export default ShareForm