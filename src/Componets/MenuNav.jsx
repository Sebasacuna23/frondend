import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


function MenuNav() {
    



    return(
        <Nav className="justify-content-end" activeKey="/">
        <Nav.Item>
          <NavLink className="nav-link" to="/">Inicio</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/productos">Productos</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/pedido">Pedidos</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/agenda-pedidos">Agendar su pedido</NavLink>
        </Nav.Item>
      </Nav>
    )
}export{MenuNav}