import React from "react";
import General from "./General";
import Academic from "./Academic";
import "./Profile.css";
import { Row, Col } from "react-bootstrap";

const Profile = () => (
  <div className="profile">
    <General />
    <Academic />
  </div>
);

export default Profile;
