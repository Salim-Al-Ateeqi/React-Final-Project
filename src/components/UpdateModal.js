import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import jam3iyatStore from "../stores/jam3iyatStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function UpdateModal({ closeModal, isOpen, _jam3iya }) {
  const [jam3iya, setJam3iya] = useState({
    title: _jam3iya.title,
    image: _jam3iya.image,
    startDate: new Date(_jam3iya.startDate),
    endDate: new Date(_jam3iya.endDate),
    amount: _jam3iya.amount,
    limit: _jam3iya.limit,
  });

  const handleChange = (event) => {
    setJam3iya({ ...jam3iya, [event.target.name]: event.target.value });
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    jam3iyatStore.updateJam3iya(_jam3iya._id, jam3iya);
    closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Signin Modal"
      >
        <h3>Jam3iya Update Form</h3>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Jam3iya Name</label>
            <input
              name="title"
              type="text"
              value={jam3iya.title}
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
              value={jam3iya.image}
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
              value={jam3iya.amount}
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
              value={jam3iya.limit}
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
          <Button variant="outline-success" onClick={handleUpdate}>
            Update Jam3iya
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default UpdateModal;
