import React from 'react';

const ImageList = ({ images }) => {
    const imagesRender = images.map(({id, description, urls}) => (
        <img
            key={id}
            alt={description}
            src={urls.regular}
        />))
    return <div>{imagesRender}</div>
};

export default ImageList;