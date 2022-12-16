import { HashRouter, Route, Routes } from "react-router-dom"
import { MenuNav } from "../Componets/MenuNav"
import { ContactPage } from "../pages/ContactPage"
import { HomePage } from "../pages/HomePage"
import { NotFound } from "../pages/NotFound"
import { PedidoDetalle } from "../pages/PedidoDetalle"
import { PedidoForm } from "../pages/PedidoForm"
import { PedidoPage } from "../pages/PedidoPage"



function App() {
 

  return (
    <div>
      <HashRouter>
    <MenuNav/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contacto" element={<ContactPage/>}/>
      <Route path="/pedido" element={<PedidoPage/>}/>
      <Route path="/pedido/:id" element={<PedidoDetalle/>}/> 
      <Route path="/pedido/form" element={<PedidoForm/>}/> 
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </HashRouter>

    </div>
  )
}

export default App
