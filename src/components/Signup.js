import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import authStore from "../stores/authStore";
import Button from "react-bootstrap/Button";

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

function Signup({ closeModal, isOpen }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Signup Modal"
      >
        <h3>Signup</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              value={user.username}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={user.email}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              value={user.password}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <Button
            className="btn float-right"
            type="submit"
            variant="outline-success"
          >
            Sign up
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default Signup;
