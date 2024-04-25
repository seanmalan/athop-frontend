import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  console.log(user)

  return (
    <div className="mb-6">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="mr-6">
            <h1>Seans Transport Hub</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cards">Card</Nav.Link>
            <Nav.Link href="/journeys">Journeys</Nav.Link>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
            {user ? (
              <Nav.Link href={`/patron/${user.user_id}`}>MyHUB</Nav.Link>
            ) : <Nav.Link href="/login">MyHUB</Nav.Link>}
            
            {user ? (
              <p onClick={logoutUser} className="text-muted my-auto">Log Out</p>
            ) : (
              <Nav.Link href="/login">Log In</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
