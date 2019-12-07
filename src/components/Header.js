import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import sachin from "../assets/sachin2.jpg";



export default class Header extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: 'black',
      }}>
        <img
              alt=""
              src={sachin}
              width="100"
              height="100"
            />
      </div>
    );
  }
}

