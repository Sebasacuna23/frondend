const BASE_URL = "http://localhost:8080/"

export async function getAllProductos(){
    const options = {method: 'GET'};
    const res= await fetch(BASE_URL+"productos", options);
    return await res.json();
};

export async function saveProducto(producto) {
    const options ={
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(producto)
    };
    
    const res= await fetch(BASE_URL+"productos", options);
    return await res.json();
};

export async function deleteProductoById(id) {
    const options ={method:'DELETE'};
    const res= await fetch(BASE_URL+"productos/"+id, options);
    return await res.text();
};

export async function findProductoById(id) {
    const res= await fetch(BASE_URL+"productos/"+ id);
    return await res.json();
};