import React, { useState } from "react";
import Container  from "react-bootstrap/Container";
import './App.css';
import  Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



function Find(props) {
    const [disabled, cDisabled] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
            const searchParams = { 
                sFirstname: e.target.sFirstname.value,
                sLastname: e.target.sLastname.value,
                sEmail: e.target.sEmail.value,
                sCourse: e.target.sCourse.value,
                dateMin: e.target.dateMin.value,
                dateMax: e.target.dateMax.value
            }
            props.querySearch(searchParams)
    };
    return (
    <>
    <Container className="mx-auto formContainer">
        <h5 className="findHeader">Searching for...</h5>
        <br />
        <Form className="form2" onSubmit={(e) => submitHandler(e)} id="findForm">
        <Form.Group>
        <Form.Label>First name: </Form.Label>
        <Form.Control
            type="text"
            defaultValue={props.currentProfileForm?.sFirstname}
            name="sFirstname"
            disabled={disabled}
            placeholder="Participant's first name">
        </Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label>Last name: </Form.Label>
        <Form.Control
            type="text"
            defaultValue={props.currentProfileForm?.sLastname}
            name="sLastname"
            disabled={disabled}
            placeholder="Participant's last name">
        </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Email:</Form.Label>
         <Form.Control
            type="text"
            defaultValue={props.currentProfileForm?.sEmail}
            name="sEmail"
            disabled={disabled}
            placeholder="Participant Email">
          </Form.Control>
        </Form.Group>
        <Form.Group>
         <Form.Label>    
        Course: </Form.Label>

        <Form.Select id="sCourse" name="sCourse">
            <option value="Sheffield Council 12 week Bootcamp">Sheffield Council 12 week Bootcamp</option>
            <option value="Part-Time Software Development Bootcamp">Part-Time Software Development Bootcamp</option>
            <option value="Part-Time Data Science Bootcamp">Part-Time Data Science Bootcamp</option>
        </Form.Select>
        </Form.Group>
        <Form.Group>
            <Form.Label>
        Start date:</Form.Label>
        <Form.Control
            type="date"
            defaultValue={props.currentProfileForm?.date}
            name="dateMin"
            disabled={disabled}></Form.Control>
        </Form.Group>
        <Form.Group>
        End date: 
        <Form.Control
            type="date"
            defaultValue={props.currentProfileForm?.date}
            name="dateMax"
            disabled={disabled}>
        </Form.Control>
        </Form.Group>
        <br/>
        <Button  size="sm" type="submit" disabled={disabled}>
            {" "}
            Search{" "}
        </Button>
    </Form>
    </Container>
    </>
);
}

export default Find