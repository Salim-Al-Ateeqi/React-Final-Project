import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import jam3iyatStore from "../stores/jam3iyatStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

function CreateJam3iya({ closeModal, isOpen }) {
  const [jam3iya, setJam3iya] = useState({
    title: "",
    image: "",
    startDate: Date.now(),
    endDate: Date.now(),
  });

  const handleChange = (event) => {
    setJam3iya({ ...jam3iya, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    jam3iyatStore.createJam3iyat(jam3iya);
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
        <h3>Jam3iya Creation Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Jam3iya Name</label>
            <input
              name="title"
              type="text"
              className="form-control"
              onChange={handleChange}
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label>Jam3iya Image</label>
            <input
              name="image"
              type="text"
              className="form-control"
              onChange={handleChange}
              placeholder="Enter image url"
            />
          </div>
          <div className="form-group">
            <label>Jam3iya Amount</label>
            <input
              name="amount"
              type={Number}
              className="form-control"
              onChange={handleChange}
              placeholder="Enter cost"
            />
          </div>
          <div className="form-group">
            <label>Jam3iya Limit</label>
            <input
              name="limit"
              type={Number}
              className="form-control"
              onChange={handleChange}
              placeholder="Enter seat limit"
            />
          </div>
          <div className="form-group">
            <label>Jam3iya Start Date</label>
            <DatePicker
              selected={jam3iya.startDate}
              onChange={(date) => setJam3iya({ ...jam3iya, startDate: date })}
            />
          </div>
          <div className="form-group">
            <label>Jam3iya End Date</label>
            <DatePicker
              selected={jam3iya.endDate}
              onChange={(date) => setJam3iya({ ...jam3iya, endDate: date })}
            />
          </div>
          <Button variant="outline-success" onClick={handleSubmit}>
            Create Jam3iya
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default CreateJam3iya;
