import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import NavLogo from "../assets/jam3iyat.png";
import SignupButton from "./SignupButton";
import SigninButton from "./SigninButton";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

function MyNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="color">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={NavLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Jam3iyat
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id="navbarScrollingDropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
            {authStore.user ? (
              <>
                <h2>Welcome, {authStore.user.username}</h2>
                <button onClick={authStore.signout} size="2em" color="red">
                  Logout
                </button>
              </>
            ) : (
              <>
                {" "}
                <SigninButton /> <SignupButton />{" "}
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default observer(MyNavbar);
