import React, { useEffect, useState } from 'react';
import './Gallery.css';

import { SRLWrapper } from "simple-react-lightbox";

const options = {
	// settings: {
	// 	overlayColor: 'rgb(25, 136, 124)',
	// 	autoplaySpeed: 1500,
	// 	transitionSpeed: 900
	// },
	// buttons: {
	// 	backgroundColor: 'red',
	// 	iconColor: 'rgba(126, 172, 139, 0.8)'
	// },
	// caption: {
	// 	captionColor: '#a6cfa5',
	// 	captionFontFamily: 'Raleway, sans-serif',
	// 	captionFontWeight: '300',
	// 	captionTextTransform: 'uppercase'
	// },
	// progressBar: {
	// 	height: '20px',
	// 	fillColor: 'blue',
	// 	backgroundColor: 'white'
	// }
};

function Gallery() {
	const [type, setType] = useState('library');
	const [images, setImages] = useState([])
	const [filteredImages, setFilteredImages] = useState([]);
	const [username, setUserName] = useState()

	//Get username from props
	// useEffect(() => {
	// 	setUserName(this.props.username);
	// }, [this.props.username])
	

	useEffect(() => {
		// GET request using fetch

		// use props to access username
		//fetch('https://j8wefl5kw3.execute-api.us-east-1.amazonaws.com/default/getImages?username='+username)
		fetch('https://j8wefl5kw3.execute-api.us-east-1.amazonaws.com/default/getImages?username='+'hello')
			.then(response => response.json())
			.then(data => setImages(data));
	},[]);
	
	useEffect(() => {
			setFilteredImages(images[type]);
		},
		[type, images]
	);



	const TagButton = ({ name, handleSetType, typeStatus }) => {
		return (
			<button className={`nav-item ${typeStatus ? 'active' : null}`} onClick={() => handleSetType(name)}>
				{name.toUpperCase()}
			</button>
		);
	};
	

	return (
		<div className="App">
			<div className="navbar">
				<TagButton name="library" tagActive={type === 'library' ? true : false} handleSetType={setType} /> /
				<TagButton name="share_lib" tagActive={type === 'share_lib' ? true : false} handleSetType={setType} /> /
			</div>
			<SRLWrapper options={options}>
				<div className="container">
					{filteredImages && filteredImages.map(image => (
						 <div className="image-card"> 
							<a href={`https://dalphotosharing.s3.amazonaws.com/${image[type]}`}>
								<img className="image" src={`https://dalphotosharing.s3.amazonaws.com/${image[type]}`} alt={`Name: ${image[type]}`} />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</div>
	);
}


export default Gallery;