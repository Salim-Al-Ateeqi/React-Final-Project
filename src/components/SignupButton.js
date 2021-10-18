import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Signup from "./Signup";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <Button variant="outline-success" onClick={openModal}>
        Sign Up
      </Button>
      <Signup isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
