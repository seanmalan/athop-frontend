import React, { useState } from "react";
import { Tab, Tabs, Form, Button } from "react-bootstrap";

const JourneyPlanner = () => {
  const [startPoint, setStartPoint] = useState("");
  const [destination, setDestination] = useState("");


  console.log("Start Point:", startPoint);
  console.log("Destination:", destination);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Start Point:", startPoint);
    console.log("Destination:", destination);
    // You can add your logic here to handle the form submission (e.g., API call)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="startPoint">
        <Form.Label>Starting Point:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter starting point"
          value={startPoint}
          onChange={(e) => setStartPoint(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="destination">
        <Form.Label>Destination:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </Form.Group>

      <div className="form-button-section">
        {startPoint === "" || destination === "" ? (
          <Button variant="dark" type="submit" disabled className="form-submit-button">
            Plan My Journey
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Plan My Journey
          </Button>
        )}
      </div>
    </Form>
  );
};

const MyTabs = () => {
  return (
    <Tabs defaultActiveKey="journeyPlanner">
      <Tab eventKey="journeyPlanner" title="Journey Planner">
        <JourneyPlanner />
      </Tab>
      <Tab eventKey="liveDepartures" title="Live Departures">
        {/* Content for Live Departures tab goes here */}
        <div className="live-departures">
          <p>Live Departures content</p>
        </div>
      </Tab>
      <Tab eventKey="timetables" title="Timetables">
        {/* Content for Timetables tab goes here */}
        <div className="timetables-content">
          <p>Timetables content</p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default MyTabs;
