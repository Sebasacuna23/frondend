import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { findAllClientes, findPedidoById, guardarPedido } from "../server/Server";

function PedidoForm() {
    const{id} =useParams();

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

    const [clientes, setClientes] = useState([]);

    async function listaClientes(){
        try {
            const response = await findAllClientes();
            setClientes(response);
            console.log(clientes)
            
        } catch (error) {            
        }  
    };

    useEffect(()=>{
        if (id!==undefined) {
            setDisabled(true)
            findPedidoById(id).then(
                res=>{setPedido(res)}
            )
            
        }
        listaClientes();
    },[id]);

    function handleChange({target}) {
        setPedido({
            ...pedido,
            [target.name]:target.value
        })
        
        
    }

    async function handleSubmit(e) {
        e.preventDefault(); 
        const resp=await guardarPedido(pedido);
        if (id!==undefined) {
        alert("Se actualizo el pedido:"+resp.id);
    }else{
         alert("Se creo el pedido:"+resp.id);
    }
        returnToPedido();
        
    };

    const [disabled,setDisabled] = useState(false);

    

    return(
        <Container>
        <h1> {id!==undefined?"Detalle Pedido":"Registrar Pedido"}</h1>
        <Form className="my-3" onSubmit={handleSubmit}>
            <Row>
                <Col xs="auto" className="my-1">
                <Form.Label>Fecha despacho:</Form.Label>
                <Form.Control
                    required
                    placeholder="aaaa-mm-dd"
                    name="fecha_despacho"
                    onChange={handleChange}

                    value={pedido.fecha_despacho}
                    disabled ={disabled}
                />
                </Col>
                <Col xs="auto" className="my-1">
                    <Form.Label>Cliente:</Form.Label>
                    <Form.Select
                        required
                        name="nombrecliente"
                        onChange={handleChange}
                        disabled ={disabled} 
                        >
    
                        <option>{pedido.nombrecliente}</option>
                        {
                            clientes.map((cliente)=>(
                                <option key={cliente.id} value={cliente.id}>{cliente.nombre} {cliente.apellido}</option>

                            ))
                        }   
                       
                    </Form.Select>
                </Col>
            </Row>
                <Row>
                    <Col>
                        <Button disabled ={disabled} variant="success" type="submit">{id!==undefined?"Actualizar":"Guardar"}</Button>
                    </Col>
                    <Col>
                    <Button hidden={!disabled} variant="warning" onClick={()=>setDisabled(!disabled)}>Editar</Button>
                    </Col>
                    <Col>
                    <Button onClick={returnToPedido}>Regresar</Button>
                    </Col>
                </Row>

            
        </Form>

        </Container>
        
    )
    
}export{PedidoForm}