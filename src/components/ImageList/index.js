import React from 'react';

const ImageList = ({images}) => {
    const imagesRender = images.map((image) => <img src={image.urls.regular} />)
    return <div>{imagesRender}</div>
};

export default ImageList;