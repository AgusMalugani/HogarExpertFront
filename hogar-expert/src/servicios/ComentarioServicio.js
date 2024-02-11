
const API_URL = "http://localhost:8080/comentario";

export async function listaComentarios(){
    const response = await fetch(`${API_URL}/lista`)
    const data = await response.json()
    return data;

}

export async function crearComentario(comentario){
    const response = await fetch(`${API_URL}/crear`,
   {
    method :"POST",
    headers : {"Content-type" : "application/json"},
    body: JSON.stringify(comentario)
   } )
}