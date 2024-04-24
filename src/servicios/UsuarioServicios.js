import { json } from "react-router-dom";

//const API_URL = "http://localhost:8080/usuario";
const API_URL = "https://hogarexpertback.onrender.com/usuario";



export async function obtenerUsuarios(token){
    
        const response = await fetch(API_URL + "/lista" ,{
            headers: {"Authorization" : token}
        });
      if(response.status === 403){
        window.location.href = "/SinAutorizacion";
        return;
      }
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
        if(response.status === 403){
            window.location.href = "/SinAutorizacion";
            return;
          }
        
        const data = await response.json()
        return data;
        }

        
export async function updateUsuario(id,formData,token){
    const response = await fetch(`${API_URL}/modificar/${id}`,{
        method:"PUT",
        headers:{"Authorization" : token},
        body: formData

    })
    if(response.status === 403){
        window.location.href = "/SinAutorizacion";
        return;
      }
    return response.json();
}

export async function updateUsuarioImg(id,formDataImg,token){
const response = await fetch(`${API_URL}/modificarImg/${id}`,{
    method:"PUT",
    headers:{"Authorization":token},
    body: formDataImg
})
if(response.status === 403){
    window.location.href = "/SinAutorizacion";
    return;
  }
return response.json();
}