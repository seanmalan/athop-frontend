import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user, logoutUser, authTokens } = useContext(AuthContext);

  // useEffect(() => {
  //   console.log(authTokens ? "User is logged in" : "User is logged out");
  // }, [authTokens]);

  return (
    <div className="mb-6">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1>Seans Transport Hub</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cards">Card</Nav.Link>
            <Nav.Link href="/journeys">Journeys</Nav.Link>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
            {user ? (
              <>
                <Nav.Link href={`/patron/${user.user_id}`}>MyHUB</Nav.Link>
                <span className="text-muted my-auto mx-3"> | </span>
                <Nav.Link onClick={logoutUser} className="text-primary">Log Out</Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login">Log In</Nav.Link>
            )}

            <Nav.Link href="/register">Register</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
