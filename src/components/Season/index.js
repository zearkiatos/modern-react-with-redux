import React, { Fragment } from "react";

class Season extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      errorMessage: "",
      error: false,
    };
  }

  initialization() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          latitude: position.coords.latitude,
          error: false,
          errorMessage: "",
        }),
      (err) =>
        this.setState({
          errorMessage: err.message,
          error: true,
        })
    );
  }

  componentDidMount() {
    this.initialization();
  }

  render() {
    if (this.state.error && !this.state.latitude)
      return (
        <Fragment>
          <span> Error: </span>
          {this.state.errorMessage}
        </Fragment>
      );

    if (!this.state.error && this.state.latitude)
      return <div>Latitude: {this.state.latitude}</div>;

    return <div>Loading... </div>;
  }
}

export default Season;
