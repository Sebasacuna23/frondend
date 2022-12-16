const BASE_URL="http://localhost:8080/"

export async function listaPedidos() {
    const options ={method:'GET'};
    const res= await fetch(BASE_URL+"pedidos", options);
    return await res.json();
};

export async function guardarPedido(pedido) {
    const options ={
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(pedido)
    };
    
    const res= await fetch(BASE_URL+"pedidos", options);
    return await res.json();
};

export async function eliminarPedidoPorId(id) {
    const options ={method:'DELETE'};
    const res= await fetch(BASE_URL+"pedidos/"+id, options);
    return await res.text();
};