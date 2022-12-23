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
                pedidos.map((pedido)=>(
                    <Col key={pedido.id}>
                    <Card style={{ width: '18rem' }} className="mb-2">
                            <Card.Body>
                                <Card.Title>Id: {pedido.id}</Card.Title>
                                {/* <Card.Title>Id: {pedido.id.substring(0, 15)}</Card.Title> */}
                                <Card.Subtitle className="mb-2 text-muted">Cliente: {pedido.id_cliente}</Card.Subtitle>
                                <Card.Text>
                                    fecha pedido: <b>{pedido.fecha_pedido}</b>
                                </Card.Text>
                                <Link to={`/pedido/agregar/${pedido.id}`}>Programar pedido</Link>
                            </Card.Body>
                    </Card>
                    </Col>

                ))}
        
    </Row>
    )
    
}export{CardsPedido}