import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Signin from "./Signin";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <Button variant="outline-secondary" onClick={openModal}>
        Sign in
      </Button>
      <Signin isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;
