import React from "react";
import { Container } from "react-bootstrap";
import { CardsPedido } from "../Componets/CardsPedido";

function PedidoCitasPage() {
    return(
        <Container>
            <h1>Agendar su Pedido</h1>
            <CardsPedido/>
        </Container>
    )
    
}export{PedidoCitasPage}
