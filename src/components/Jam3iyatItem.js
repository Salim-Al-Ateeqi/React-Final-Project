import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Moment from "react-moment";
import jam3iyatStore from "../stores/jam3iyatStore";
import { observer } from "mobx-react";
import UpdateModal from "./UpdateModal";

function Jam3iyatItem({ jam3iya }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const jam3iyatUsers = jam3iya.users.map((user) => {
    return user.username;
  });

  const handleJoin = (event) => {
    event.preventDefault();
    jam3iyatStore.joinJam3iya(jam3iya._id);
  };
  const handleLeave = (event) => {
    event.preventDefault();
    jam3iyatStore.leaveJam3iya(jam3iya._id);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    jam3iyatStore.deleteJam3iya(jam3iya._id);
  };

  return (
    <div className="item">
      <Card style={{ width: "18rem", borderRadius: "50px" }}>
        <Card.Img
          variant="top"
          src={jam3iya.image}
          style={{ height: "18rem" }}
        />
        <Card.Body style={{ height: "18rem" }}>
          <Card.Title className="font">
            <h4>{jam3iya.title}</h4>
          </Card.Title>
          <Card.Text>
            <div>
              <strong>Amount:</strong> {jam3iya.amount}
            </div>

            <div>
              <strong>Limit:</strong> {jam3iya.limit}
            </div>
            <div>
              <strong>Start Date: </strong>
              <Moment format="DD/MM/YYYY">{jam3iya.startDate}</Moment>
            </div>
            <div>
              <strong>End Date: </strong>
              <Moment format="DD/MM/YYYY">{jam3iya.endDate}</Moment>
            </div>
            <div>
              <strong>Jam3iya duration: </strong>
              <Moment
                duration={jam3iya.startDate}
                date={jam3iya.endDate}
                format="MM"
              ></Moment>
              {" month(s)"}
            </div>
            <div>
              <strong>Author:</strong> {jam3iya.author.username}
            </div>
            <div>
              <strong>Joined Users: {jam3iyatUsers}</strong>
            </div>
            <Button onClick={handleJoin} type="submit">
              Join
            </Button>
            <Button onClick={handleLeave} type="submit">
              Leave
            </Button>
            <Button onClick={handleDelete} type="submit">
              Delete
            </Button>
            <Button onClick={openModal} type="submit">
              Update
            </Button>
            <UpdateModal
              isOpen={isOpen}
              closeModal={closeModal}
              _jam3iya={jam3iya}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default observer(Jam3iyatItem);
