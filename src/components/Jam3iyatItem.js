import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";

function Jam3iyatItem({ jam3iya }) {
  return (
    <div className="item">
      <Card style={{ width: "18rem" }}>
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
              <strong>Author:</strong> {jam3iya.author.username}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Jam3iyatItem;
