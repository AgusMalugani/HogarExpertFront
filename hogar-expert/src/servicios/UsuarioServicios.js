import { json } from "react-router-dom";

const API_URL = "http://localhost:8080/usuario";

export async function obtenerUsuarios(token){
    
        const response = await fetch(API_URL + "/lista" ,{
            headers: {"Authorization" : token}
        });
      
        const data = await response.json();
        return data;
   
}


export async function saveUsuario(formData){
    const response = await fetch(`${API_URL}/crear`,{
        method:"POST",
        body: formData
    })
    return response.json();
}







export async function deleteUsuarios(id,token){
    await fetch(`${API_URL}/eliminar/${id}`,{
   headers: {"Authorization" : token},
    method:"DELETE" })
    }

    export async function perfilUsuario(id,token){
        const response = await fetch(`${API_URL}/perfil/${id}`,{
            headers: {"Authorization" : token}
        });
        const data = await response.json()
        return data;
        }

        
export async function updateUsuario(id,usuario){
    const response = await fetch(`${API_URL}/modificar/${id}`,{
        method:"PUT",
        headers:{
            "Content-type" : "application/json"
        },
        body: JSON.stringify(usuario)

    })
}