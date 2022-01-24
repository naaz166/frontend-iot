import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App'
import Add from "./Add";
import Find from "./Find";
import Button from 'react-bootstrap/Button';
import ParticipantCard from './ParticipantCard';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";


//mport Table from 'react-bootstrap/Table';
  function ParticipantDashboard(props) {
  const [profileForms, cProfileForms] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const refreshList = () => {
  props.client.getProfileForms().then((response) => cProfileForms(response.data));
  };
 
  const updateProfileForm= (id) => {
    let e=profileForms.filter((profileForm)=>{return profileForm._id == id});
   if(e.length>0){
    cCurrent(e[0])
   }
  };

  useEffect(() => {
    refreshList();
  }, []);
  
  function buildcards() {
    return profileForms.map((current) => {
      return (
        <>
          <ParticipantCard id={current._id} fullname={current.fullname} email={current.email} bio={current.bio} linkedin={current.linkedin} github={current.github} portfolio={current.portfolio} picture={current.picture} course={current.course} date={current.date} updateProfileForm={updateProfileForm}></ParticipantCard>
        </>


      );
    });
  }
    return (

      <main>
        <Container className="contentContainer">
          <Row className="headerRow">
            <h5 className="header-title">Participants Dashboard</h5>
            <h4>Logged in as {props.username}</h4>
          </Row>
    
      <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
      <Button  onClick={props.logout}>
          {" "}
          Logout{" "}
        </Button>
      </div>

        <br />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {buildcards()}
        </div>
      <Row className="bodyRow mx-auto text-center mt-2">
      
      
      
      
      <Col xs={6}>
      <Add
        client={props.client}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentProfileForm={current}
        logout={props.logout}
      />
      </Col>
      </Row>
      </Container>
      </main>

  );
  
}
export default ParticipantDashboard;