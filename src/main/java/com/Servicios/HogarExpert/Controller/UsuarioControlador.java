/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Controller;

import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Entity.Usuario;
import com.Servicios.HogarExpert.Service.IUsuarioServicio;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController()
@RequestMapping("/usuario")

public class UsuarioControlador {
    
    @Autowired
    private IUsuarioServicio usuarioServi;
    
    @PostMapping("/crear")
    public String crearUsuario(@RequestBody Usuario usuario) {
        
        try {
            usuarioServi.save(usuario);
            return "usuario creado";
        } catch (MiException ex) {
         return " error " + ex.getMessage();
        }
        
    }
    
    @GetMapping("/perfil/{id}")
    public Usuario verUsuario(@PathVariable Long id){
        try {
            Usuario u = usuarioServi.findById(id);
            
            return u;
        } catch (MiException ex) {
            System.out.println(ex.getMessage());
            return null;
            
        }
     
        }
    
    @GetMapping("/lista")
    public List<Usuario>listaUsuarios(){
        
        return usuarioServi.findAll();
    }
    
    

    @PutMapping("/modificar/{id}")
    public String modificarUsuario(@PathVariable Long id, @RequestBody Usuario usuario) throws MiException{
        try{
         usuarioServi.update(id, usuario);
         
        return "exito usuario modificado";
        }catch(MiException ex){
            
        return "error " + ex.getMessage();
        }
        
    }
    
    @DeleteMapping("/eliminar/{id}")
    public String eliminarUsuario(@PathVariable Long id){
        try {
            usuarioServi.delete(id);
            return " usuario eliminado";
        } catch (MiException ex) {
        return "error " + ex.getMessage();
        }
        
        
    }
    
    
}
