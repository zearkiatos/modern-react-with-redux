import React from 'react';
import ImageCard from '../ImageCard';
import './styles/index.css';

const ImageList = ({ images }) => {
    const imagesRender = images.map(image => (
        <ImageCard
            key={image.id}
            image={image}
        />))
    return <div className="image-list">{imagesRender}</div>
};

export default ImageList;