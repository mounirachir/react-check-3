import React, { Component } from "react";
import Profile from "./Profile";
import "./App.css";
class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Hello There!",
      imgSrc: "https://cnmi.spmi.pt/wp-content/uploads/2014/10/speaker-3.jpg",
      profession: "Software Developer",
    },
    show: false,
    startTime: null,
    mountedTime: "00:00:00",
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.tick(); // Immediately update mountedTime to avoid delay
    this.timerID = setInterval(this.tick, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timerID);
  };

  tick = () => {
    const { startTime } = this.state;
    if (startTime) {
      const elapsedTime = Date.now() - startTime;
      const formattedTime = new Date(elapsedTime).toISOString().substr(11, 8);
      this.setState({
        mountedTime: formattedTime,
      });
    }
  };

  toggleShow = () => {
    this.setState(
      (prevState) => ({
        show: !prevState.show,
        startTime: prevState.show ? null : Date.now(), // Store start time if showing profile
        mountedTime: prevState.show ? "00:00:00" : "00:00:00", // Reset timer to zero if showing profile
      }),
      () => {
        if (this.state.show) {
          this.startTimer(); // Start timer when profile is shown
        } else {
          this.stopTimer(); // Stop timer when profile is hidden
        }
      }
    );
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {show && (
          <Profile
            fullName={fullName}
            bio={bio}
            imgSrc={imgSrc}
            profession={profession}
            mountedTime={mountedTime}
          />
        )}
        <p>Component mounted at: {mountedTime}</p>
      </div>
    );
  }
}

export default App;
