/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Controller;

import com.Servicios.HogarExpert.Entity.Comentario;
import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Service.IComentarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */
 @RestController
 @RequestMapping("/comentario")
public class ComentarioControlador {
     @Autowired
     IComentarioServicio comServ;
     
     
      @PostMapping("/crear")
    public String crearComentario(@RequestBody Comentario com) {
        
        try {
            comServ.save(com);
            return "comentario creado";
        } catch (MiException ex) {
         return " error " + ex.getMessage();
        }
        
    }
    
    @GetMapping("/detalle/{id_comentario}")
    public Comentario verComentario(@PathVariable Long id_comentario){
        try {
            Comentario c = comServ.findById(id_comentario);
            
            return c;
        } catch (MiException ex) {
            System.out.println(ex.getMessage());
            return null;
            
        }
     
        }
    
  
    
    

    @PutMapping("/modificar/{id_comentario}")
    public String modificarComentario(@PathVariable Long id_comentario, @RequestBody Comentario com) throws MiException{
        try{
         comServ.update(id_comentario, com);
         
        return "exito comentario modificado";
        }catch(MiException ex){
            
        return "error " + ex.getMessage();
        }
        
    }
    
    @DeleteMapping("/eliminar/{id_comentario}")
    public String eliminarComentario(@PathVariable Long id_comentario){
        try {
            comServ.delete(id_comentario);
            return " comentario eliminado";
        } catch (MiException ex) {
        return "error " + ex.getMessage();
        }
        
        
    }
}
