import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../components/Rating";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";



const Product = ({ product }) => {
  const [qty, setQty] = useState(1);

   const addToCartHandler = () => {
     Router.push(`/cart/${product.results.data.id}?qty=${qty}`);
   };

  return (
    <>
      <Link href="/">
        <button className="btn btn-light my-3"> Go Back </button>
      </Link>
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
              {/* <ListGroup.Item>
                Category: {product.results.data.categoryId}
              </ListGroup.Item>
              <ListGroup.Item>
                Sub-Category: {product.results.data.subcategoryId}
              </ListGroup.Item> */}
              <ListGroup.Item>
                Price: {product.results.data.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.results.data.description}
              </ListGroup.Item>
              <ListGroup.Item>
                In Stock: {product.results.data.inStock}
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.results.data.inStock > 0
                      ? "In Stock"
                      : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.results.data.inStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.results.data.inStock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className="btn-block"
                  type="button"
                  disabled={product.results.data.inStock === 0}
                >
                  Add To Cart
                </Button>
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
