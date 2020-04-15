import React from "react";
import "./Profile.css";
import profile_image from "../assets/profile.jpg";

const ProfilePicture = () => (
  <div className="profile_image">
    <img src={profile_image} alt="profile-image" />
  </div>
);

export default ProfilePicture;
