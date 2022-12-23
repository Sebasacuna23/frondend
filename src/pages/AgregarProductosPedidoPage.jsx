import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findPedidoById, guardarPedido } from "../server/Server";
import { getAllProductos } from "../server/ServerProductos";

function AgregarProductosPedidoPage() {
    // id producto
    const { id } = useParams();

    // pedido
    const [pedido, setPedido] = useState({});

    // productoPedido
    const [productoPedido, setProductoPedido] = useState("");

    // lista productos
    const[productos,setProductos]=useState([]);
    

    async function listarProductos() {
        try {
            const response = await getAllProductos();
            setProductos(response);
        } catch (error) {
            console.log(error);            
        }        
    };

    useEffect(() => {
        findPedidoById(id).then(data => {
            setPedido(data);
        })
        listarProductos()
    }, []);

    const handleSelect = (e) => {
        setProductoPedido(e.target.value);
    };

    async function handleSubmit() {
        const product = productoPedido.split(',')
        // console.log(nombre[1]);
        if (productoPedido !== "") {
            pedido.productos.push({ idProducto: product[0],nombreProducto: product[1], precioProducto: product[2]});
            // pedido.productos.push({ idProducto: productoPedido});
            guardarPedido(pedido);
        } else {
            alert("Seleccione un horario")
        }
    }

    // const franjaHoraria = productos;

    return (
        <Container className="my-3">
            <h1>siuuuuu!!!!</h1>
            <Row>
                <Col>
                    {/* <p>Fecha Pedido: </p> */}
                    {/* <h3>{pedido.fecha_despacho}</h3> */}
                </Col>
                <Col>
                    {/* <p>In cliente:</p> */}
                    {/* <h4>{pedido.id_cliente}</h4> */}
                </Col>
            </Row>

            <Row className="my-3">
                <Col xs lg="2">
                    Horarios disponibles:
                </Col>
                <Col md="auto">
                    {
                        productos.map(producto => (
                            <Form.Check className="my-3"
                                key={producto.id}
                                label={producto.nombre +": "+ producto.descripcion}
                                type="radio"
                                name="idProducto"
                                // value={producto.id}
                                value={[producto.id,producto.nombre, producto.precio]}

                                onChange={handleSelect}
                            />
                        ))
                    }

                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="success" onClick={() => handleSubmit()}>Registrar Pedido </Button>
                </Col>
            </Row>
        </Container>
    )

} export { AgregarProductosPedidoPage }
