import React from 'react';
import {Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../../components/Rating'
import products from '../../utils/products'
import { useRouter } from "next/router";


const Product = () => {
    const router = useRouter();
     const {id} = router.query;
     console.log(products)
     //const product = products.find(product)
    
    return <div> {id} </div>;
}
 
export default Product;