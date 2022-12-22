import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardProducto } from "../Componets/CardProducto";
// import { CardsPedido } from "../Componets/CardsPedido";


function ProductosPage() {
    return (
        <Container>
            <hr />
             <Row className="my-3">
                <Col><h1>Nuestros productos</h1></Col>
                <Col xxl={3}></Col>
                <Col>
                    <Link to="/productos/admin">
                        administrar productos
                    </Link> 
                </Col>
            </Row>
                        
            <CardProducto/>
        </Container>
    )

} export { ProductosPage }