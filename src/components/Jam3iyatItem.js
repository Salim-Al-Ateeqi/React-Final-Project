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
          <Card.Title>{jam3iya.title}</Card.Title>
          <Card.Text>
            <div>Amount: {jam3iya.amount}</div>

            <div>Limit: {jam3iya.limit}</div>
            <div>
              Start Date:
              <Moment format="DD/MM/YYYY">{jam3iya.startDate}</Moment>
            </div>
            <div>
              End Date: <Moment format="DD/MM/YYYY">{jam3iya.endDate}</Moment>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Jam3iyatItem;
