import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import CreateJam3iya from "./CreateJam3iya";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const CreateJam3iyaButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      {authStore.user && (
        <Button variant="outline-light" onClick={openModal}>
          Create a Jam3iya!
        </Button>
      )}

      <CreateJam3iya isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default observer(CreateJam3iyaButton);
