/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Controller;

import com.Servicios.HogarExpert.Entity.Trabajo;
import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Service.ITrabajoServicio;
import java.util.List;
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
@RequestMapping("/trabajo")
public class TrabajoControlador {
    @Autowired
    private ITrabajoServicio trabajoServi;
    
    @PostMapping("/crear")
    public String crearTrabajo(@RequestBody Trabajo t) {
        
        try {
            trabajoServi.save(t);
            return "trabajo creado";
        } catch (MiException ex) {
         return " error " + ex.getMessage();
        }
        
    }
    
    @GetMapping("/detalle/{num_trabajo}")
    public Trabajo verTrabajo(@PathVariable Long num_trabajo){
        try {
            Trabajo t = trabajoServi.findById(num_trabajo);
            
            return t;
        } catch (MiException ex) {
            System.out.println(ex.getMessage());
            return null;
            
        }
     
        }
    
    @GetMapping("/lista")
    public List<Trabajo>listaTrabajos(){
        
        return trabajoServi.findAll();
    }
    
    

    @PutMapping("/modificar/{num_trabajo}")
    public String modificarTrabajo(@PathVariable Long num_trabajo, @RequestBody Trabajo t) throws MiException{
        try{
         trabajoServi.update(num_trabajo, t);
         
        return "exito trabajo modificado";
        }catch(MiException ex){
            
        return "error " + ex.getMessage();
        }
        
    }
    
    @DeleteMapping("/eliminar/{num_trabajo}")
    public String eliminarTrabajo(@PathVariable Long num_trabajo){
        try {
            trabajoServi.delete(num_trabajo);
            return " trabajo eliminado";
        } catch (MiException ex) {
        return "error " + ex.getMessage();
        }
        
        
    }
    
    
}
