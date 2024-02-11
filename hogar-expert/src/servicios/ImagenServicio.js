const API_URL ="http://localhost:8080/imagen";

export async function traerImagenUsuario(id){
const response = await fetch(`${API_URL}/perfil/${id}`)
const data = await response.json();
return data
}