import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Tile extends Component {
  render() {
    return (
      <div>
        <Card
          text="temp"
          style={{
            height: "6rem",
            width: "9rem",
            padding: "18px",
            color:"white",
            backgroundColor: "#66d1cc",
          }}
        >
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Body>
            <Card.Title>
              <h2>{this.props.data}</h2>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
