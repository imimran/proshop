import React, { useEffect } from "react";
import Link  from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image, 
  Form,
  Button,
  Card,
} from "react-bootstrap";


const Cart = () => {
 

  

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
    
 
              <Button
                type="button"
                className="btn-block"
               
              >
                Proceed To Checkout
              </Button>
          
        
      </Col>
    </Row>
  );
};

export default Cart;
