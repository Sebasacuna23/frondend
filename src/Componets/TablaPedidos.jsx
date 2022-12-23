import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormControl, FormLabel, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { eliminarPedidoPorId, listaPedidos } from "../server/Server";

function TablaPedidos() {

    const [pedidos,setPedidos] = useState([]);

    async function cargarPedidos(){
        try {
            const res = await listaPedidos();
            setPedidos(res);
        } catch (error) {
            console.log(error);
            
        }
        
    };
    useEffect(()=>{
        cargarPedidos();
    },[])

    async function deletePedidoPorId(id){
        let result =window.confirm("Seguro de eliminar");
        if(result){
            const response= await eliminarPedidoPorId(id);
            alert(response)
            setPedidos(pedidos.filter(pedido =>pedido.id !==  id));

        }
    }
    
    let  contador=0;

  
    return(
        <Container>
           <Row className="my-3">
                <Col><h2>Lista de Pedidos</h2></Col>
                <Col xs={6}></Col>
                <Col>
                    <Link to="/pedido/form">
                        <Button variant="success">Registrar</Button>
                    </Link>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                         <th>#pedidos</th>
                        <th>Id Pedido</th>
                        {/* <th>Fecha_despacho</th> */}
                        <th>cliente</th>
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
                             {/* <td>{pedido.fecha_despacho}</td> */}
                             <td>{pedido.id_cliente}</td>
                             <td><Link to={`/pedido/${pedido.id}`}>Ver Detalle</Link></td>
                             <td><Button  variant="danger" onClick={()=>deletePedidoPorId(pedido.id)}>Eliminar</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
    
}export{TablaPedidos}