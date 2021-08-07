import React, {useState} from 'react'
import './UploadButton.css';
import UploadForm from '../UploadForm/UploadForm';


const UploadButton = () => {
    const [uploadForm, setUploadForm] = useState(false);

    return (
        <div className="header">
			<button onClick={() => setUploadForm(true)} className="share-btn">UPLOAD</button>

            
            <UploadForm triggerUploadForm={uploadForm} setTriggerUploadForm={setUploadForm} />
		</div>
         
    );
}

export default UploadButton
