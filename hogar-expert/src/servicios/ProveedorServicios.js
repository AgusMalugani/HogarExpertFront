    const API_URL = "http://localhost:8080/proveedor";

export async function listaProveedores(){
    const response = await fetch(`${API_URL}/lista`);
    const data = await response.json()
    return data;
}

export async function saveProveedor(proveedor){
    const response = await fetch(`${API_URL}/crear`,{
        method : "POST",
        headers: {
             "Content-type" : "application/json" },
        body : JSON.stringify(proveedor)

    })
}

export async function deleteProveedor(id){
const response = await fetch(`${API_URL}/eliminar/${id}`,
{
    method : "DELETE"
})
}

export async function detalleProveedor(id){
    const response = await fetch(`${API_URL}/detalle/${id}`);
    const data = await response.json()
    return data;
}

export async function updateProveedor(id,proveedor){
    const response = await fetch(`${API_URL}/modificar/${id}`,{
        method : "PUT",
        headers: {
             "Content-type" : "application/json" },
        body : JSON.stringify(proveedor)

    })
}


