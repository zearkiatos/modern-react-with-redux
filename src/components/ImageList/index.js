import React from 'react';
import './styles/index.css'
const ImageList = ({ images }) => {
    const imagesRender = images.map(({id, description, urls}) => (
        <img
            key={id}
            alt={description}
            src={urls.regular}
        />))
    return <div className="image-list">{imagesRender}</div>
};

export default ImageList;