import React, { Component } from "react";
import { Container } from "react-bootstrap";    
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


const styles = {
  containerClass: { paddingTop: "2%", paddingBottom: "2%", color:"white" },
  labelClass: {
    position: "absolute",
    left: "46.5%",
    color: "#66d1cc"
  }
};


export default class Career extends Component {
    componentDidMount = ()=>{
        console.log(this.props.data)
    }
  render() {
    return (
      <div>
        <div style={{color:"white",fontWeight: "900", marginLeft:"1.5rem"}}>
            <h1>ODI CAREER:</h1>
        </div>
        <div >
          <Container style={styles.containerClass}>
            <LineChart width={1500} height={250} data={this.props.data}>
              <XAxis dataKey="name" />
              <YAxis domain={[0, 220]} />
              <Tooltip />
              <CartesianGrid stroke="#eee" strokeDasharray="12 12" />
              <Legend />
              <Line
                type="monotone"
                dataKey="scores"
                stroke="#66d1cc"
                strokeWidth="3"
                strokeOpacity="0.65"
                activeDot={{ r: 8 }}
              />
            </LineChart>
            <div style={styles.labelClass}>Total Matches</div>
          </Container>
        </div>
      </div>
    );
  }
}
