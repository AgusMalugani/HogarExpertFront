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
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin("*")
public class TrabajoControlador {
    @Autowired
    private ITrabajoServicio trabajoServi;
    
    @PostMapping("/crear")
    public void crearTrabajo(@RequestBody Trabajo t) {
        
        try {
            System.out.println(t.getProveedor());
            System.out.println(t.getUsuario());
            trabajoServi.save(t);
            System.out.println("trabajo creado");
        } catch (MiException ex) {
            System.out.println(ex.getMessage());
        }
        
    }
    
    @GetMapping("/detalle/{num_trabajo}")
    public Trabajo verTrabajo(@PathVariable Long num_trabajo){
        try {
            Trabajo t = trabajoServi.findById(num_trabajo);
            System.out.println("trabajo encontrado");
            
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
    public void eliminarTrabajo(@PathVariable Long num_trabajo){
        try {
            trabajoServi.delete(num_trabajo);
            System.out.println( " trabajo eliminado");
        } catch (MiException ex) {
            System.out.println(ex.getMessage());
        }
        
        
    }
    
    
}
