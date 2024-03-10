export async function  LoginBack(loginData){
    try {
        const response = await fetch(`http://localhost:8080/login`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(loginData),
            redirect: "follow", // Ajuste para seguir redirecciones
        });

        const responseData = await response.json();
        console.log(responseData); // Muestra la respuesta del servidor en la consola
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
} 