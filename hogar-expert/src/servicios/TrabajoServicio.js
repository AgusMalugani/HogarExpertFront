const API_URL="http://localhost:8080/trabajo";

 export async function saveTrabajo(trabajoDatos){
    const response = await fetch( `${API_URL}/crear`,
    {
        method: "POST",
        headers : {"Content-type" : "application/json"},
        body : JSON.stringify(trabajoDatos)


    })

}



export async function listaTrabajo(id){
 const response = await fetch(`${API_URL}/listaPorProveedor/${id}`)
 const data = await response.json();       
return data;
}

export async function listaTrabajoUsuario(id){
    const response = await fetch(`${API_URL}/listaPorUsuario/${id}`)
    const data = await response.json();       
   return data;
   }


export async function deleteTrabajo(num_trabajo){
    const response = await fetch( `${API_URL}/eliminar/${num_trabajo}`,
    {
        method: "DELETE"
    })

}

export async function updateTrabajo(id,trabajo){
const response = await fetch(`${API_URL}/modificar/${id}`,{
method : "PUT",
headers : {"Content-type" : "application/json"},
body : JSON.stringify(trabajo)
}
)
}

export async function verTrabajo(id){
const response = await fetch(`${API_URL}/detalle/${id}`)
const data = await response.json()
return data;

}


export async function trabajosEsperandoProv(id){
    const response = await fetch(`${API_URL}/listaTrabajosEsperando/${id}`)
    const data = await response.json()
    return data;
}

export async function trabajosEsperandoUsuario(id){
    const response = await fetch(`${API_URL}/listaTrabajosEsperandoUsuario/${id}`)
    const data = response.json();
    return data;
}




