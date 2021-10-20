import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import Moment from "react-moment";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function MoreInfoModal({ jam3iya, user }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const jam3iyatUsers = jam3iya.users.map((user) => {
    return user.username;
  });

  return (
    <>
      <Button variant="outline-info" onClick={openModal}>
        More Info.
      </Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="MoreInfoModal"
      >
        <h1 className="font">Jam3iya Details:</h1>
        <div>
          <strong>Author:</strong> {jam3iya.author.username}
        </div>
        <div>
          <strong>Monthly Amount:</strong> {jam3iya.amount} KD
        </div>
        <div>
          <strong>Seat Limit:</strong> {jam3iya.limit}
        </div>
        <div>
          <strong>Joined Users: </strong>
          {jam3iyatUsers + ""}
        </div>
      </Modal>
    </>
  );
}

export default MoreInfoModal;
