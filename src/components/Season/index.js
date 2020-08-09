import React from 'react';

class Season extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            errorMessage: '',
            error: false
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    error: false,
                    errorMessage: ''
                })
            },
            (err) => {
                console.error(err);
                this.setState({
                    errorMessage: err.message,
                    error: true
                })
            }
        );
    }

    render(){
        return (
            <div>
                Latitude: {this.state.latitude}
                <br />
                Error: {this.state.errorMessage}
            </div>
        )
    }
}

export default Season;