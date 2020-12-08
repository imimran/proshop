import React from "react";
import { Card } from "react-bootstrap";
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img
        variant="top"
        src={`http://localhost:5000/uploads/${product.image}`}
      />

      <Card.Body>
        <a href={`/product/${product.id}`}>
          <Card.Title as="div">
            <strong>{product.title}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            // color='red'
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
