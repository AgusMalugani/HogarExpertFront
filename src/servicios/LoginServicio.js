const URL_API = "http://localhost:8080";
import { json } from 'react-router-dom';

export async function  LoginBack(loginData){
    try {
        const response = await fetch(`${URL_API}/login`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(loginData)
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      

        const responseData = await response.json();
        const token = `Bearer ${responseData.jwtToken}`;
        localStorage.setItem('token', token); 
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
}


export async function UsuarioLog(token){
    const response = await fetch(`${URL_API}/usuarioLog`,{
        headers: {"Authorization" : token}
    })
    const data = await response.json();
    return data;

}