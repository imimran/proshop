import React from 'react';
import {Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../../components/Rating'
import products from '../../utils/products'
import { useRouter } from "next/router";


const Product = () => {
    const router = useRouter();
     const { product } = router.query;
    //const product = products.find((p) => p._id === match.params.id)
    return (
        <div>{product}</div>
      );
}
 
export default Product;