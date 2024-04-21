import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Patron.css";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from 'react-bootstrap/Button';
import LoadingPage from "../components/LoadingPage";

import errorImage from '../images/404-image.png'

const Patron = () => {
  let { id } = useParams();
  let [patronData, setPatronData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(null);

  console.log(patronData);

  useEffect(() => {
    let fetchData = async () => {
      let patronResponse = await fetch(
        `http://127.0.0.1:8000/api/patron/${id}`
      );
      let userData = await patronResponse.json();

      if (!patronResponse.ok) {
        setError(userData);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setPatronData(userData);
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return (
      <div>
        <div>Uh oh! Something went wrong!</div>
        <div>{error.message}</div>
        <img src={errorImage} alt="error" />
      </div>
    );
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Patron</h1>

      <div className="indiv-patron-details">
        <div key={patronData.patron.id}>
          <h3>
            {patronData.patron.first_name} {patronData.patron.last_name}
          </h3>
          <p>{patronData.patron.email}</p>
          <p>{patronData.patron.phone}</p>
        </div>
      </div>

      <h2 style={{ textAlign: "center" }}>Cards</h2>
      <div className="indiv-patron-cards">
        {patronData.cards.map((card) => {
          return (
            <div key={card.id} className="indiv-patron-card">
              <Card border="info" style={{ width: "22rem", textAlign: "center"}}>
                <Card.Header>
                  <h3> Card: {card.card_number}</h3>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <p>Your Current Balance is: ${card.balance}</p>
                  </Card.Title>
                  <Card.Text>
                    Card was created on: {card.created}
                    {/* this will be where more info gets stored */}
                  </Card.Text>
                  <Link to={`/card/${id}`} className="btn btn-info text-center">View Card Details</Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="indiv-patron-journey">
        <h2 style={{ textAlign: "center" }}>Journeys</h2>

        {patronData.journeys.map((journey) => {
          return (
            <div key={journey.id}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="journey-header">
                    <h3>
                      {journey.start_location} to {journey.end_location}
                    </h3>{" "}
                    <p className="journey-title-date">{journey.end_time}</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>You started your journey at {journey.start_time}</p>

                    <p>You arrived at your destination at {journey.end_time}</p>
                    <p>This trip cost you ${journey.trip_cost}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          );
        })}
      </div>

      <div className="indiv-patron-transaction">
        <h2 style={{ textAlign: "center" }}>Transactions</h2>

        {patronData.transactions.map((transaction) => {
          return (
            <div key={transaction.id}>
              <Accordion className="my-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Topped Up: ${transaction.amount} on {transaction.created}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Your original Balance was: ${transaction.original_balance}
                    </p>
                    <p>Your top up amount was: ${transaction.amount}</p>
                    <p>Your current balance is: ${transaction.new_balance}</p>

                    <p>Date of Transaction: {transaction.created}</p>
                  </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item> */}
              </Accordion>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Patron;
