import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { findProductoById, saveProducto } from "../server/ServerProductos";
import { findAllClientes, findPedidoById, guardarPedido } from "../server/Server";


function PedidoProductosForm() {

    const { id } = useParams();

    const navigate = useNavigate();

    function returnToProductos() {
        navigate("/pedido")
    };

    const [pedidos, setPedidos] = useState(
        {
            id_cliente: "",
            nombrecliente: "",
            fecha_pedido: "",
            fecha_despacho: "",
            direccion: "",
            productos: []

        }
    );

    const [clientes, setClientes] = useState([]);

    async function listaClientes() {
        try {
            const response = await findAllClientes();
            setClientes(response);
            console.log(clientes)

        } catch (error) {
        }
    };

    useEffect(() => {
        if (id !== undefined) {
            setDisabled(true)
            findProductoById(id).then(
                res => { setPedidos(res) }
            )
        }
        listaClientes()
    }, [id]);

    function handleChange({ target }) {
        setPedidos({
            ...pedidos,
            [target.name]: target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const resp = await guardarPedido(pedidos);
        if (id !== undefined) {
            alert("Se actualizó el pedido: " + resp.id);
        } else {
            alert("Se creó el pedido: " + resp.id);
        }
        returnToProductos();

    };

    const [disabled, setDisabled] = useState(false);

    return (
        <Container>
            <hr />
            <h1> {id !== undefined ? "Detalle pedido" : "Gestionar pedido"}</h1>
            <br />
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} xs={3} controlId="formGridEmail">
                        <Form.Label>nombre cliente</Form.Label>
                        <Form.Select
                            required
                            name="id_cliente"
                            onChange={handleChange}
                            disabled={disabled}>

                            <option>{pedidos.id_cliente}</option>{
                                clientes.map((cliente) => (
                                    <option 
                                    key={cliente.id} 
                                    value={cliente.id}>{cliente.nombre} {cliente.apellidos}</option>
                                
                                ))
                            }
                            {/* {console.log(cliente.nombrecliente)} */}

                        </Form.Select>
                    </Form.Group>     
                   
                </Row>
                <br />
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>fecha_pedido:</Form.Label>
                        <Form.Control
                            type="date"
                            required
                            placeholder="fecha_pedido"
                            name="fecha_pedido"
                            onChange={handleChange}

                            value={pedidos.fecha_pedido}
                            disabled={disabled} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>direccion:</Form.Label>
                        <Form.Control
                            required
                            placeholder="direccion"
                            name="direccion"
                            onChange={handleChange}

                            value={pedidos.direccion}
                            disabled={disabled} />
                    </Form.Group>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Button disabled={disabled} variant="primary" type="submit">{id !== undefined ? "Actualizar" : "Guardar"}</Button>
                    </Col>
                    <Col>
                        <Button hidden={!disabled} variant="warning" onClick={() => setDisabled(!disabled)}>Editar</Button>
                    </Col>
                    <Col>
                        <Button variant="link" onClick={returnToProductos}>Regresar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )

} export { PedidoProductosForm }