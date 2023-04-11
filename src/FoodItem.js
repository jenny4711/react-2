import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

// The drink listing page should show a list of drink choices, 
// with each being a link to the details about the drink, just like for food items.
// change to items instead of snack
function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  let snack = items.find(snack => snack.id === id);
  if (!snack) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
