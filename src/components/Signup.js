import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import authStore from "../stores/authStore";

function Signup({ closeModal, isOpen }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
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
          <div className="form-group row">
            <div className="col-6">
              <label>First Name</label>
              <input
                name="firstName"
                value={user.firstName}
                type="text"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <label>Last Name</label>
              <input
                name="lastName"
                value={user.lastName}
                type="text"
                className="form-control"
                onChange={handleChange}
              />
            </div>
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
          <button className="btn float-right" type="submit">
            Sign up
          </button>
        </form>
      </Modal>
      ); ;
    </div>
  );
}

export default Signup;