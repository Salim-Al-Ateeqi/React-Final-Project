import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import authStore from "../stores/authStore";

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

function Signin({ closeModal, isOpen }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Signin Modal"
      >
        <h3>Signin</h3>
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
            <label>Password</label>
            <input
              name="password"
              value={user.password}
              type="password"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <button className="btn float-right" type="submit">
            Sign in
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Signin;
