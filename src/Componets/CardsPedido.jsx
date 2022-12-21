import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listaPedidos } from "../server/Server";

function CardsPedido() {
    
    const[pedidos,setPedidos]=useState([]);

    async function listPedidos() {

        try {
            const response = await listaPedidos();
            setPedidos(response);
        } catch (error) {
            console.log(error);
            
        }
        
    };

    useEffect(()=>{
        listPedidos()

    },[]);

    const fechaActual = new Date();

    return(
        <Row className="my-3">
            {
                pedidos.filter(pedido=>pedido.fecha_despacho>fechaActual.toISOString()).map((pedido)=>(
                    <Col key={pedido.id}>
                    <Card style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title>{pedido.fecha_despacho}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Disponibilidad de pedido</Card.Subtitle>
                        <Card.Text>
                         Some quick example text to build on the card title and make up the
                         bulk of the card's content.
                        </Card.Text>
                        <Link to={`/pedidos/citas/${pedido.id}`}>Programar pedido</Link>
                        </Card.Body>
                    </Card>
                    </Col>

                ))}
        
    </Row>
    )
    
}export{CardsPedido}