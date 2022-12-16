import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TablaPedidos() {

    const [pedidos,setPedidos] = useState([]);

    async function cargarPedidos(){
        const options = {method: 'GET'};

    fetch('http://localhost:8080/pedidos', options)
        .then(response => response.json())
        .then(response => setPedidos(response))
        .catch(err => console.error(err));
    };
    useEffect(()=>{
        cargarPedidos();
    },[])
    
    let  contador=0;

  
    return(
        <Container>
            <Row>
                <Col><h2>Lista de Pedidos</h2></Col>

            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                         <th>#pedidos</th>
                        <th>Id Pedido</th>
                        <th>Fecha_despacho</th>
                        <th>Id cliente</th>
                        <th>Ver detalle</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pedidos.map((pedido)=>(
                            <tr key={pedido.id}>
                             <td>{++contador}</td>
                             <td>{pedido.id}</td>
                             <td>{pedido.fecha_despacho}</td>
                             <td>{pedido.id_cliente}</td>
                             <td><Link>Ver Detalle</Link></td>
                             <td><Button variant="danger">Eliminar</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
    
}export{TablaPedidos}