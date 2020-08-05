import React from 'react';

const Season = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.error(err)
    );
    return <div>Latitude: </div>;
}

export default Season;