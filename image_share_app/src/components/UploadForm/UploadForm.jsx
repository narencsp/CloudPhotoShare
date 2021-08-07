import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react'
import './UploadForm.css'

function UploadForm(props) {

    return (props.triggerUploadForm) ? (
        <div className="popup">
            <div className="popup-inner">
            <h4>Popup!</h4>
            </div>
            <button  onClick={() => props.setTriggerUploadForm(false)} className="clost-btn">close</button>
        </div>
    ) : "";
}

export default UploadForm