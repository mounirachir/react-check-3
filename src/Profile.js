// Profile.js
import React, { Component } from "react";
import "./App.css";

class Profile extends Component {
  state = {
    timer: 0,
  };
  componentDidMount = () => {
    this.timerID = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const { fullName, imgSrc, bio, profession } = this.props;
    const { timer } = this.state;
    return (
      <div className="App">
        <h1>{fullName}</h1>
        <img src={imgSrc} alt="Profile" />
        <p>Bio: {bio}</p>
        <p>Profession: {profession}</p>
        <h2>{timer}</h2>
      </div>
    );
  }
}

export default Profile;
