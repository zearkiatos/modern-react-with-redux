import React, { Fragment } from "react";
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from '../Spinner'

class Season extends React.Component {
  state = {
    latitude: 0,
    longitude: 0,
    errorMessage: "",
    error: false,
  };

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
      return <SeasonDisplay latitude={this.state.latitude}/>;

    return <Spinner />;
  }
}

export default Season;
