import React from 'react'
import UploadButton from '../UploadButton/UploadButton';
import ShareButton from '../ShareButton/ShareButton';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
			<h1 className="head-name">Dal Photo Sharing App</h1>
            <div className="controls">
                <ShareButton />
                <UploadButton />
            </div>
            
		</div>
    )
}

export default Header
