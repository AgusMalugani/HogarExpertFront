import React, { useState } from 'react'

export default function PreguntasFrecuentes() {
    const[resp,setResp]=useState(false);
    function verResp(){
        console.log(resp);
        setResp(!resp);
    }
  return (
    <div>
        <button onClick={verResp}>Como me registro</button>
        { resp && <p>haciendo click AQUI</p>}
      
    </div>
  )
}
