import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormControl, FormLabel, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProductoById, getAllProductos } from "../server/ServerProductos";

function TablaProductos() {

    const [productos,setProductos] = useState([]);

    async function cargarProductos(){
        try {
            const res = await getAllProductos();
            setProductos(res);
        } catch (error) {
            console.log(error);
            
        }
        
    };
    useEffect(()=>{
        cargarProductos();
    },[])

    async function deleteProductoPorId(id){
        let result =window.confirm("Seguro que desea eliminar este producto?");
        if(result){
            const response= await deleteProductoById(id);
            alert(response)
            setProductos(productos.filter(producto =>producto.id !==  id));

        }
    }
    
    let  contador=0;

  
    return(
        <Container>
            <hr />
           <Row className="my-3">
                <Col><h2>Lista de Productos</h2></Col>
                <Col xs={6}></Col>
                <Col>
                    <Link to="/producto/form">
                        <Button variant="success">Nuevo Producto</Button> 
                    </Link> 
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {/* <th>#pedidos</th> */}
                        <th>Id Producto</th>
                        <th>nombre</th>
                        <th>descripcion</th>
                        <th>precio</th>
                        <th>ver detalle</th>
                        <th>stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto)=>(
                            <tr key={producto.id}>
                             {/* <td>{++contador}</td> */}
                             <td>{producto.id}</td>
                             <td>{producto.nombre}</td>
                             <td>{producto.descripcion}</td>
                             <td>${producto.precio.toLocaleString("es-MX")}</td>
                             <td><Link to={`/producto/${producto.id}`}>Ver Detalle</Link></td>
                             <td><Button  variant="danger" onClick={()=>deleteProductoPorId(producto.id)}>Eliminar</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
    
}export{TablaProductos}