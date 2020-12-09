import React from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../../components/Rating";


const Product = ({ product }) => {
  console.log(product);
  return (
    <>
      {product.results.data && (
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              style={{ width: "70%", height: "90%" }}
              src={`http://localhost:5000/uploads/${product.results.data.image}`}
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
              <ListGroup.Item>
                Brand: {product.results.data.brand}
              </ListGroup.Item>
              <ListGroup.Item>
                Category: {product.results.data.categoryId}
              </ListGroup.Item>
              <ListGroup.Item>
                Sub-Category: {product.results.data.subcategoryId}
              </ListGroup.Item>
              <ListGroup.Item>
                Price: {product.results.data.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.results.data.description}
              </ListGroup.Item>
              <ListGroup.Item>
                In Stock: {product.results.data.inStock}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
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
