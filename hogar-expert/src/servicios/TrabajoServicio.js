const API_URL="http://localhost:8080/trabajo";

 export async function saveTrabajo(trabajoDatos,token){
    const response = await fetch( `${API_URL}/crear`,
    {
        method: "POST",
        headers : {"Content-type" : "application/json",
    "Authorization":token},
        body : JSON.stringify(trabajoDatos)


    })
    if(response.status === 403){
        window.location.href = "/SinAutorizacion";
        return;
      }

}



export async function listaTrabajo(id,token){
 const response = await fetch(`${API_URL}/listaPorProveedor/${id}`,{
    headers:{"Authorization":token}
 })
 const data = await response.json();   
 if(response.status === 403){
    window.location.href = "/SinAutorizacion";
    return;
  }    
return data;
}

export async function listaTrabajoUsuario(id,token){
    const response = await fetch(`${API_URL}/listaPorUsuario/${id}`,{
        headers:{"Authorization":token}
    })
    if(response.status === 403){
        window.location.href = "/SinAutorizacion";
        return;
      }
    const data = await response.json();       
   return data;
   }


export async function deleteTrabajo(id,token){
    const response = await fetch( `${API_URL}/eliminar/${id}`,
    {
        method: "DELETE",
        headers:{"Authorization":token}
    })
    if(response.status === 403){
        window.location.href = "/SinAutorizacion";
        return;
      }

}

export async function updateTrabajo(id,trabajo,token){
const response = await fetch(`${API_URL}/modificar/${id}`,{
method : "PUT",
headers : {"Content-type" : "application/json",
"Authorization":token},
body : JSON.stringify(trabajo)
}
)
if(response.status === 403){
    window.location.href = "/SinAutorizacion";
    return;
  }
}

export async function verTrabajo(id,token){
const response = await fetch(`${API_URL}/detalle/${id}`,{
    headers:{"Authorization" : token}
})
if(response.status === 403){
    window.location.href = "/SinAutorizacion";
    return;
  }
const data = await response.json()
return data;

}


export async function trabajosEsperandoProv(id,token){
    const response = await fetch(`${API_URL}/listaTrabajosEsperando/${id}`,{
        headers:{"Authorization":token}
    })
    if(response.status === 403){
        window.location.href = "/SinAutorizacion";
        return;
      }
    const data = await response.json()
    return data;
}

export async function trabajosEsperandoUsuario(id,token){
    const response = await fetch(`${API_URL}/listaTrabajosEsperandoUsuario/${id}`,{       
        headers:{"Authorization":token}
    })
    if(response.status === 403){
        window.location.href = "/SinAutorizacion";
        return;
      }
    const data = await response.json();
    return data;
}




