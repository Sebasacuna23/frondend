import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findPedidoById, guardarPedido } from "../server/Server";

function CitasPedidoPage() {
    const { id } = useParams();

    const [pedido, setPedido] = useState({});

    const [horaRadio, setHoraRadio] = useState("");

    useEffect(() => {
        findPedidoById(id).then(data => {
            setPedido(data);

        })
    }, []);

    const handleSelect = (e) => {
        setHoraRadio(e.target.value);
    };

    async function handleSubmit() {
        if (horaRadio !== "") {
            pedido.citas.push({ hora: horaRadio, id_cliente: "" });
            guardarPedido(pedido);
        } else {
            alert("Seleccione un horario")
        }
    }

    const franjaHoraria = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00"];

    return (
        <Container className="my-3">
            <Row>
                <Col>
                    <p>Fecha Pedido: </p>
                    <h3>{pedido.fecha_despacho}</h3>
                </Col>
                <Col>
                    <p>nombre del Cliente :</p>
                    <h4>{pedido.nombrecliente}</h4>
                </Col>
            </Row>
            <Row className="my-3">
                <Col xs lg="2">
                    Horarios disponibles:
                </Col>
                <Col md="auto">
                    {
                        franjaHoraria.map(hora => (
                            <Form.Check className="my-3"
                                key={hora}
                                label={hora + " AM"}
                                type="radio"
                                name="hora"
                                value={hora}
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

} export { CitasPedidoPage }
