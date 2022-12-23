import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllProductos } from "../server/ServerProductos";

function CardProducto() {
    
    const[productos,setProductos]=useState([]);

    async function listarProductos() {
        try {
            const response = await getAllProductos();
            setProductos(response);
        } catch (error) {
            console.log(error);            
        }        
    };

    useEffect(()=>{
        listarProductos()
    },[]);

    // const fechaActual = new Date();

    return(
        <Row className="my-3">
            {
                productos.map((producto)=>(
                    <Col key={producto.id}>
                    <Card style={{ width: '18rem' }} className="mb-2">
                    <Card.Body>
                        <Card.Title>{producto.nombre.toUpperCase()}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{producto.descripcion}</Card.Subtitle>
                        <Card.Text>
                         Disponibilidad: {producto.stock}
                         <br />
                         precio unidad: <b>$ {producto.precio.toLocaleString('es-MX')}</b>
                        </Card.Text>
                        {/* <Link to={`/pedidos/citas/${producto.id}`}>Agregar al pedido    </Link> */}
                        </Card.Body>
                    </Card>
                    </Col>

                ))
            }        
        </Row>
    )
    
}export{CardProducto}