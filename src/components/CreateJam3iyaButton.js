import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CreateJam3iya from "./CreateJam3iya";

const CreateJam3iyaButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <Button variant="outline-dark" onClick={openModal}>
        Create a Jam3iya!
      </Button>
      <CreateJam3iya isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default CreateJam3iyaButton;