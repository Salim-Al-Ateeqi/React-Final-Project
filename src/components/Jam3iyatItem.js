import React, { useState } from "react";
import { Card, Button, ModalFooter, ModalBody } from "react-bootstrap";
import Moment from "react-moment";
import { observer } from "mobx-react";
import UpdateModal from "./UpdateModal";
import MoreInfoModal from "./MoreInfoModal";
import authStore from "../stores/authStore";
import jam3iyatStore from "../stores/jam3iyatStore";

function Jam3iyatItem({ jam3iya }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

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
            <ModalBody />
          </Card.Title>
          <Card.Text>
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
            <ModalFooter />
            <MoreInfoModal jam3iya={jam3iya} />
            {authStore.user?._id === jam3iya.author._id && (
              <>
                <Button
                  variant="outline-secondary"
                  onClick={openModal}
                  type="submit"
                >
                  Update
                </Button>
                <UpdateModal
                  isOpen={isOpen}
                  closeModal={closeModal}
                  _jam3iya={jam3iya}
                />
                <Button
                  variant="outline-danger"
                  onClick={handleDelete}
                  type="submit"
                >
                  Delete
                </Button>
              </>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default observer(Jam3iyatItem);
