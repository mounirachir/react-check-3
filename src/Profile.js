// Profile.js
import React from "react";
import "./App.css";
const Profile = ({ fullName, bio, imgSrc, profession }) => {
  return (
    <div className="App">
      <h1>{fullName}</h1>
      <img src={imgSrc} alt="Profile" />
      <p>Bio: {bio}</p>
      <p>Profession: {profession}</p>
    </div>
  );
};

export default Profile;
