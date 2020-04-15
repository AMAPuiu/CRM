import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileInfo from "./ProfileInfo";
import { Row, Col } from "react-bootstrap";
import "./Profile.css";

const General = () => (
  <div className="general">
    <Row
      style={{ marginLeft: 0, marginRight: 0, marginTop: 0, marginBottom: 0 }}
    >
      <Col
        xs={3}
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <ProfilePicture />
      </Col>
      <Col
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <ProfileInfo />
      </Col>
    </Row>
  </div>
);

export default General;
