import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import NavLogo from "../assets/jam3iyat.png";
import SignupButton from "./SignupButton";
import SigninButton from "./SigninButton";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import CreateJam3iya from "./CreateJam3iya";
import CreateJam3iyaButton from "./CreateJam3iyaButton";

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
          <Nav>
            <CreateJam3iyaButton />
            {authStore.user ? (
              <>
                <h4 className="margin">Welcome, {authStore.user.username}</h4>
                <Button onClick={authStore.signout} variant="outline-danger">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <label className="margin">
                  <SigninButton />
                </label>
                <label className="margin">
                  <SignupButton />
                </label>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default observer(MyNavbar);
