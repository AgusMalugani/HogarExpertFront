import React, { useEffect } from 'react'

export default function Dashboard() {
    useEffect(() => {
        // Verifica la existencia del token
        const token = localStorage.getItem('token');
        if (!token) {
          // Redirige a la página de inicio de sesión si no hay token
          history.push('/login');
        }
      }, []);

  return (
    <div>
    <h1>Dashboard</h1>
    {/* Contenido del dashboard */}
  </div>
  )
}
