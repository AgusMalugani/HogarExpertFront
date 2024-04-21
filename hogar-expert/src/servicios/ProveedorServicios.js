import { json } from "react-router-dom";

    const API_URL = "http://localhost:8080/proveedor";

export async function listaProveedores(token){
    const response = await fetch(`${API_URL}/lista`,{
        headers: {"Authorization" : token}
    });
    if(response.status === 403){
        window.location.href = "/SinAutorizacion";
        return;
      }
    const data = await response.json()
    return data;
}

export async function saveProveedor(formData){
    const response = await fetch(`${API_URL}/crear`,{
        method : "POST",
        body: formData

    })

    const data = await response.json();
    return data;
}

export async function deleteProveedor(id,token){
const response = await fetch(`${API_URL}/eliminar/${id}`,
{
    method : "DELETE",
    headers:{"Authorization":token}
})
}

export async function detalleProveedor(id,token){
    const response = await fetch(`${API_URL}/detalle/${id}`,{
        headers: {"Authorization" : token}
    });
    if(response.status === 403){
        window.location.href = "/SinAutorizacion";
        return;
      }
    const data = await response.json()
    return data;
}

export async function updateProveedor(id,formData,token){
    const response = await fetch(`${API_URL}/modificar/${id}`,{
        method : "PUT",
        headers: {"Authorization":token},
        body : formData
    })
    if(response.status === 403){
        window.location.href = "/SinAutorizacion";
        return;
      }
    const data = await response.json();
    return data;
}

export async function updateProveedorImg(id,formDataImg,token){
const response = await fetch(`${API_URL}/modificarImg/${id}`,{
    method: "PUT",
    headers: {"Authorization":token},
    body: formDataImg
});
if(response.status === 403){
    window.location.href = "/SinAutorizacion";
    return;
  }
const data = response.json();
return data;
}


export async function listaProveedoresPorServicio(servicio){
    const response = await fetch(`${API_URL}/lista/${servicio}`);
    const data = await response.json()
    return data;
}

export async function listaProveedoresPorLocalidad(localidad,token){
const response = await fetch(`${API_URL}/listaProv/${localidad}`,{
    headers:{"Authorization":token},
});
if(response.status === 403){
    window.location.href = "/SinAutorizacion";
    return;
  }
const data = response.json();
return data;
}
