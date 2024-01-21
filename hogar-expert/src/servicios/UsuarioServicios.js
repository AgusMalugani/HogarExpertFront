export async function obtenerUsuarios(){
const response = await fetch('')
const data = await response.json()
return data;
}