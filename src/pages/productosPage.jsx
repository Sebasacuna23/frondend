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
                <Col xs={4}><h1>Nuestros productos</h1></Col>
                <Col>
                    <Link to="/productos/admin">
                    <Button variant="success">administrar productos</Button>                       
                    </Link> 
                </Col>
                <Col>
                    <Link to="/pedido/crear">
                        <Button variant="primary">Gestionar un pedido</Button>
                    </Link>
                </Col>
            </Row>
                        
            <CardProducto/>
        </Container>
    )

} export { ProductosPage }