import React, {useState} from 'react'
import './ShareButton.css';
import ShareForm from '../ShareForm/ShareForm';


const ShareButton = () => {
    const [shareForm, setShareForm] = useState(false);

    return (
        <div className="header">
			<button onClick={() => setShareForm(true)} className="share-btn">SHARE</button>


            <ShareForm triggerShareForm={shareForm} setTriggerShareForm={setShareForm} />
		</div>
         
    );
}

export default ShareButton
