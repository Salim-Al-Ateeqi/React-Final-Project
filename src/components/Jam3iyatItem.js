import React from "react";
import { Card, Button } from "react-bootstrap";

function Jam3iyatItem({ jam3iya }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={jam3iya.image} />
        <Card.Body>
          <Card.Title>{jam3iya.title}</Card.Title>
          <Card.Text>
            <br>
              {/* {jam3iya.amount}
              {jam3iya.limit}
              {jam3iya.startDate}
              {jam3iya.endDate} */}
            </br>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Jam3iyatItem;
