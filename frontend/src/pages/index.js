import React from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";

const Home = ({ products }) => {
  console.log(products.results.data);

  return (
    <>
      <h1> Latest Products</h1>
      {products && (
        <Row>
          {products.results.data.map((product, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};


export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/api/product");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}

export default Home;
