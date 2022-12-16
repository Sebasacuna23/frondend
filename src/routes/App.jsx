import { HashRouter, Route, Routes } from "react-router-dom"
import { MenuNav } from "../Componets/MenuNav"
import { ContactPage } from "../pages/ContactPage"
import { HomePage } from "../pages/HomePage"
import { NotFound } from "../pages/NotFound"
import { PedidoDetalle } from "../pages/PedidoDetalle"
import { PedidoPage } from "../pages/PedidoPage"



function App() {
 

  return (
    <div>
      <HashRouter>
    <MenuNav/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contacto" element={<ContactPage/>}/>
      <Route path="/blog" element={<PedidoPage/>}/>
      <Route path="/blog/:id" element={<PedidoDetalle/>}/> 
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </HashRouter>

    </div>
  )
}

export default App
