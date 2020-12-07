import React from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../../components/Rating";


const Product = ({ product }) => {
  console.log(product);
  return (
    <>
      <Row>
        <Col md={6}>
          <Image
            src={product.results.data.image}
            alt={product.results.data.title}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.results.data.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.results.data.rating}
                text={product.results.data.numReviews}
              />
            </ListGroup.Item>
            <ListGroup.Item>Brand: {product.results.data.brand}</ListGroup.Item>
            <ListGroup.Item>
              Category: {product.results.data.category}
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.results.data.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {product.results.data.description}
            </ListGroup.Item>
            <ListGroup.Item>In Stock: {product.results.data.inStock}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`http://localhost:5000/api/product/${id}`);
  const data = await res.json();
  return {
    props: { product: data }, // will be passed to the page component as props
  };
}

export default Product;
