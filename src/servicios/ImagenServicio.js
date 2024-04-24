//const API_URL ="http://localhost:8080/imagen";
const API_URL = "https://hogarexpertback.onrender.com/imagen";

export async function traerImagenUsuario(id){
const response = await fetch(`${API_URL}/perfil/${id}`)
const data = await response.blob();
return data
}

export async function traerImagenProveedor(id){
    const response = await fetch(`${API_URL}/detalle/${id}`)
    const data = await response.blob();
    return data;
}