const API_URL = "http://localhost:8080/usuario";

export async function obtenerUsuarios(){
const response = await fetch(API_URL+"/lista")
const data = await response.json()
return data;
}
/*
export async function saveUsuario(usuario){
    const response = await fetch(`${API_URL}/crear`,{
        method:"POST",
        headers:{
            "Content-type" : "application/json"
        },
        body: JSON.stringify(usuario)

    })
}*/
export async function saveUsuario(formData){
    const response = await fetch(`${API_URL}/crear`,{
        method:"POST",
       
        body: JSON.stringify(formData)

    })
}







export async function deleteUsuarios(id){
    await fetch(`${API_URL}/eliminar/${id}`,{
    method:"DELETE" })
    }

    export async function perfilUsuario(id){
        const response = await fetch(`${API_URL}/perfil/${id}`)
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