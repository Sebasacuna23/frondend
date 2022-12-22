import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { findProductoById, saveProducto } from "../server/ServerProductos";

function ProductoForm() {

    const{id} =useParams();

    const navigate= useNavigate();

    function returnToProductos() {
        navigate("/productos/admin")
    };

    const[producto,setProducto] =useState(
        {
            nombre:"",
            descripcion:"",
            precio:"",
            stock:""

        }
    );

    useEffect(()=>{
        if (id!==undefined) {
            setDisabled(true)
            findProductoById(id).then(
                res=>{setProducto(res)}
            )
            
        }
    },[id]);

    function handleChange({target}) {
        setProducto({
            ...producto,
            [target.name]:target.value
        })        
    }

    async function handleSubmit(e) {
        e.preventDefault(); 
        const resp=await saveProducto(producto);
        if (id!==undefined) {
        alert("Se actualizó el producto: "+resp.id);
    }else{
         alert("Se creó el producto: "+resp.id);
    }
        returnToProductos();
        
    };

    const [disabled,setDisabled] = useState(false);    

    return(
        <Container>
            <hr />
            <h1> {id!==undefined?"Detalle producto":"Registrar Producto"}</h1>
            <br />
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} xs={3} controlId="formGridEmail">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            required
                            placeholder="ingrese el nombre del producto"
                            name="nombre"
                            onChange={handleChange}

                            value={producto.nombre}
                            disabled={disabled} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control
                            required
                            placeholder="descripcion"
                            name="descripcion"
                            onChange={handleChange}

                            value={producto.descripcion}
                            disabled={disabled} />
                    </Form.Group>
                </Row>
                <br />
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>precio:</Form.Label>
                        <Form.Control
                        required
                        placeholder="precio"
                        name="precio"
                        onChange={handleChange}

                        value={producto.precio}
                        disabled ={disabled}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>stock:</Form.Label>
                        <Form.Control
                        required
                        placeholder="stock"
                        name="stock"
                        onChange={handleChange}

                        value={producto.stock}
                        disabled ={disabled}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Button disabled ={disabled} variant="primary" type="submit">{id!==undefined?"Actualizar":"Guardar"}</Button>
                    </Col>
                    <Col>
                        <Button hidden={!disabled} variant="warning" onClick={()=>setDisabled(!disabled)}>Editar</Button>
                    </Col>
                    <Col>
                        <Button variant="link" onClick={returnToProductos}>Regresar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>        
    )
    
}export{ProductoForm}