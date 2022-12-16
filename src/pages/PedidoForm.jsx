import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { guardarPedido } from "../server/Server";

function PedidoForm() {
    const navigate= useNavigate();
    function returnToPedido() {
        navigate("/pedido")
    };

    const[pedido,setPedido] =useState(
        {
            fecha_despacho:"",
            id_cliente:"",
            citas:[]
        }
    );

    function handleChange({target}) {
        setPedido({
            ...pedido,
            [target.name]:target.value
        })
        
        
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(pedido);
       const resp=await guardarPedido(pedido);
       alert("Se creo el pedido:"+resp.id);
       returnToPedido();
        
    }
    return(
        <Container>
        <h1>Registrar Pedido</h1>
        <Form className="my-3" onSubmit={handleSubmit}>
            <Row>
                <Col xs="auto" className="my-1">
                <Form.Label>Fecha despacho:</Form.Label>
                <Form.Control
                    required
                    placeholder="aaaa-mm-dd"
                    name="fecha_despacho"
                    onChange={handleChange}
                />
                </Col>
                <Col xs="auto" className="my-1">
                    <Form.Label>Cliente:</Form.Label>
                    <Form.Select
                        required
                        name="id_cliente"
                        onChange={handleChange}>
                        <option></option>    
                        <option value="6390e078c33f9d0a034fded5">Juan</option>
                        <option value="6390e078c33f9d0a034fded5">Manuela</option>
                       
                    </Form.Select>
                </Col>
            </Row>
                <Row>
                    <Col>
                        <Button variant="success" type="submit">Guardar</Button>
                    </Col>
                    <Col>
                    <Button onClick={returnToPedido}>Regresar</Button>
                    </Col>
                </Row>

            
        </Form>

        </Container>
        
    )
    
}export{PedidoForm}