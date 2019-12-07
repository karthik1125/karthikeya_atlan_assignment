import React,{ useEffect, useState } from 'react';
import sachinlogo from './assets/sachinlogo.png';
import sachin4 from './assets/sachin4.jpg';
import Fade from "react-reveal";
import './App.css';
import { Container, Row, Col } from "react-bootstrap";  // Imports
import sachin from "./assets/sachin2.jpg";
import Career from './components/career.js';
import Piechart from './components/piechart.js';
import Tile from './components/Card.js';
import BarGraph from './components/Bar.js';
import {getScores,getWinLoseStat,getWicketWinLoseStat,getDateStat,getGroundStat} from "./models/models.js";;



const styles = {
  fcolor: { color: "#66d1cc" },
  boldClass: { fontWeight: "950"},
  imageContainerClass: { paddingTop: "23%" }
};



let scores = getScores();
let results = getWinLoseStat();
let wicketResults = getWicketWinLoseStat();   //Calling Functions in models.
let dateStat = getDateStat();
let groundStat = getGroundStat();


function App() {
  return (
    <div className="App">
      <span>
      <Fade delay={9000}>
      <div className='rowC' style={{color:"white",marginLeft: '8.8rem', marginRight:'6.8rem'}}>
      <div 
        style={{
          marginLeft:"27.5rem"
        }}
      > 
            <img
                alt=""
                src={sachin}
                width="200"
                height="200"
              />                            
              <img
                alt=""
                src={sachin4}
                width="300"
                height="200"
              />
        </div>
      </div>   
      </Fade>    
    <br></br>
    
    <div>
    <Fade delay={9000}>

      <Container>
        <Row>

          <Col sm={8}>
            <Container style={{color:"white",marginLeft: '6.8rem'}}>
              <div />
              <h2 style={styles.boldClass}>
                "When you play against <span style={styles.fcolor}>SACHIN</span>,<br></br>
                &ensp;you almost want him to get a few runs just to see him bat.
              </h2>
              <h4 style={{marginLeft: '28.8rem'}}>-<span style={styles.fcolor}>Mark Waugh</span></h4>
              <Col>
              </Col>
            </Container>
          </Col>

          <Col sm={8}>
          <Container style={{color:"white",marginLeft: '46.8rem'}}>
              <div />
              <h2 style={styles.boldClass}>
                "I  have seen <span style={styles.fcolor}>GOD</span>,
                &ensp;he bats at No.4 for <span style={styles.fcolor}>INDIA</span> in tests.
              </h2>
              <h4 style={{marginLeft: '28.8rem'}}>-<span style={styles.fcolor}>Matthew Hayden</span></h4>
              <Col>
              </Col>
            </Container>
          </Col>

          <Col sm={8}>
            <Container style={{color:"white",marginLeft: '6.8rem'}}>
              <div />
              <h2 style={styles.boldClass}>
                "In my several years of International cricket,<br></br> <span style={styles.fcolor}>TENDULKAR</span>,
                 is the <span style={styles.fcolor}>BEST BATSMAN</span> I've bowled to.
              </h2>
              <h4 style={{marginLeft: '28.8rem'}}>-<span style={styles.fcolor}>Allan Donald</span></h4>
              <Col>
              </Col>
            </Container>
          </Col>

          <Col sm={8}>
          <Container style={{color:"white",marginLeft: '46.8rem'}}>
              <div />
              <h2 style={styles.boldClass}>
                "<span style={styles.fcolor}>SACHIN</span> is a <span style={styles.fcolor}>GENIUS</span>.
                &ensp;I'm a mere mortal.
              </h2>
              <h4 style={{marginLeft: '28.8rem'}}>-<span style={styles.fcolor}>Brian Lara</span></h4>
              <Col>
              </Col>
            </Container>
          </Col>

          <br></br>

          <Col sm={8}>
          <Container style={{color:"white"}}>
              <div style={{display: "flex",
                    justifyContent: "center",
                   alignItems: "center"}}>
              <h2 style={styles.boldClass}>
              Many Cricket Legends consider Sachin Tendulkar as one of the Best Batsmen till age. To understand why,
              <br></br><div style={{marginLeft:"12.4rem"}}>let us go back to where he started and how he marked his name in history </div>
              </h2>
              <Col>
              </Col>
              </div>
            </Container>
            <h2></h2>
          </Col>
          <br></br>

        </Row>
      </Container>

      <div>
        <Career data={scores} />
      </div>
      
      <Container>
        <Row>
          <Col sm={8}>
          <Container style={{color:"white",marginLeft: '6.8rem', marginRight:'6.8rem'}} >
              <div style={{display: "flex",
                    justifyContent: "center",
                   alignItems: "center"}}>
              <h2 style={styles.boldClass}>
              Through out his career, Sachin had many up's and down's. We all may know his Up's, but those down's are those that shaped his game. 
              Let's take a deeper dive into his career so that we can analyze in a better way.
              </h2>
              <Col>
              </Col>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <br></br><br></br><br></br><br></br>
      <div style={{color:"white",fontWeight: "900", marginLeft:"1.5rem"}}>
            <h1>LEGACY FOR TEAM INDIA:</h1>
        </div>

            <div className='rowC' style={{color:"white",marginLeft: '8.8rem', marginRight:'6.8rem'}}>
                <Piechart data={results} />
              <div style={{color:"white",marginLeft: '8.1rem', marginRight:'6.8rem'}}>
                <br></br>
              <h2 style={styles.boldClass}>
                  <span style={styles.fcolor}>SACHIN</span> and 90's are the best love story for the 90's kids. Everyone would hold their breath when Sachin's in his 90's.
                Well even Team India holds it too because India won <span style={styles.fcolor}>70%</span> of the matches where Sachin scored his <span style={styles.fcolor}>CENTURY</span>
                  </h2>
              </div>
            </div>

            <br></br><br></br><br></br><br></br>
            <div className='rowC' style={{color:"white",marginLeft: '15.8rem', marginRight:'6.8rem'}}>
              <Tile name = {"Total Wickets Taken"} data={wicketResults[0]}/>
              <div style={{color:"white",marginLeft: '8.8rem', marginRight:'6.8rem'}}>
              <h2 style={styles.boldClass}>
                Though he is a Genius in batting, <span style={styles.fcolor}>TENDULKAR</span> is a skilled bowler too. Infact India won {(wicketResults[1]/(wicketResults[1]+wicketResults[2]))*100} %
                of the games where he send the other teams players to their pavilion.
              </h2>

              </div>
            </div>

            <br></br><br></br><br></br><br></br>
            <div className='rowC' style={{color:"white",marginLeft: '7.8rem', marginRight:'6.8rem'}}>
              <BarGraph data={dateStat} width={400}/>
              <div style={{color:"white",marginLeft: '3.1rem', marginRight:'6.8rem'}}>
              <h2 style={styles.boldClass}>
                He constantly improved his game. After his debut, he made his performance consistent by scoring <span style={styles.fcolor}>4500+</span> runs for every 5 years.
                And this consistency was the reason he was named <span style={styles.fcolor}>MASTER BLASTER.</span>
              </h2>

              </div>
            </div>

            <br></br><br></br><br></br><br></br>
            <div className='rowC' style={{color:"white",marginLeft: '15.8rem', marginRight:'6.8rem'}}>
              <Tile name = {"Best Score"} data={200+"*"}/>
              <div style={{color:"white",marginLeft: '8.8rem', marginRight:'6.8rem'}}>
              <h2 style={styles.boldClass}>
                There were times when people thought scoring a 150 in ODI's was a great achievement. Then our <span style={styles.fcolor}>LITTLE MASTER </span>
                has left all of them in awe, by scoring the first ever <span style={styles.fcolor}>200*</span> in International cricket against South Africa.
              </h2>

              </div>
            </div>

            <br></br><br></br><br></br><br></br>
            <div className='rowC' style={{color:"white",marginLeft: '11.8rem', marginRight:'6.8rem'}}>
              <BarGraph data={groundStat} width={250}/>
              <div style={{color:"white",marginLeft: '8.1rem', marginRight:'6.8rem'}}>
              <h2 style={styles.boldClass}>
                There's no place on earth like Home. This is what many players feel. But in contrast <span style={styles.fcolor}>SACHIN</span> has actually
                scored more runs away from home in his One Day International Career. <span style={styles.fcolor}>VERSATILITY </span>is his key feature.
              </h2>

              </div>
            </div>

            <div style={{color:"white",fontWeight: "900", marginLeft:"1.5rem"}}>
            <h1>CONCLUSION:</h1>
            <div style={{marginLeft:'6.8rem',marginRight:'6.8rem'}}>
              <h2>
              Indian Cricket can be broadly divided into two eras. <span style={styles.fcolor}>BEFORE SACHIN </span> and <span style={styles.fcolor}>AFTER SACHIN</span>.
              As he has made the Indian's glued to their television's for many nail-biting and thrilling wins for his country. Above analysis infers his <span style={styles.fcolor}>CLASS</span>
              , <span style={styles.fcolor}>CONSISTENCY</span> and most of all his <span style={styles.fcolor}>GREATNESS</span>.
              <br></br><br></br>    
              </h2>
            </div>

            <div style={{display: "flex",
                    justifyContent: "center",
                   alignItems: "center"}}>
              <h1>
              That is why he is reffered as <span style={styles.fcolor}>GOD OF CRICKET</span>
              </h1>
            </div>
        </div>

        <div style={{display: "flex",
                    justifyContent: "center",
                   alignItems: "center"}}>
                     <img
                alt=""
                src={sachinlogo}
                width="200"
                height="150"
                
              />
        </div>
    </Fade>
    </div>
    </span>
</div>

  );
}

export default App;
