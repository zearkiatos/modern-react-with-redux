import React from 'react';

class Season extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0
        };
    }

    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.error(err)
        );
        return <div>Latitude: </div>;
    }
}

export default Season;