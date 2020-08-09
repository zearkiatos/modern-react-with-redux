import React from 'react';

class Season extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 40
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude
                })
            },
            (err) => console.error(err)
        );
    }

    render(){
        return <div>Latitude: {this.state.latitude}</div>;
    }
}

export default Season;