/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Controller;

import com.Servicios.HogarExpert.Entity.Trabajo;
import com.Servicios.HogarExpert.Enum.EstadoTrabajo;
import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Service.ITrabajoServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
    
   //@PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PostMapping("/crear") // lo va a crear el usuario.
    public ResponseEntity<Trabajo> crearTrabajo(@RequestBody Trabajo t) { // aca tengo que recibir, el trabajo con un usuario, proveedor y notaTrabajo
   
        try {
            System.out.println(t.getProveedor());
            System.out.println(t.getUsuario());

            Trabajo trabajo = trabajoServi.save(t);
            System.out.println("trabajo creado");
            return ResponseEntity.ok(trabajo);
            
        } catch (MiException ex) {
            System.out.println(ex.getMessage());
            return ResponseEntity.badRequest().body(null);
        }
        
    }
    
    
    @GetMapping("/listaPorProveedor/{id}")
    public List<Trabajo>listaTrabajos(@PathVariable Long id){ // envio el id del prov
        
        return trabajoServi.findAllProv(id); // retorno la lista de trabajos de ese prov.
    }
    
    
    @GetMapping("/detalle/{id}") // este es el que vera el prov. y Aca lo va a modificar.
    public Trabajo verTrabajo(@PathVariable Long id){
        try {
            Trabajo t = trabajoServi.findById(id);
            System.out.println("trabajo encontrado");
            
            return t; 
        } catch (MiException ex) {
            System.out.println(ex.getMessage());
            return null;
            
        }
     
        }
    
      @GetMapping("/listaPorUsuario/{id}")
    public List<Trabajo>listaTrabajosPorUsuario(@PathVariable Long id){ // envio el id del prov
        
        return trabajoServi.findAllUsuario(id); // retorno la lista de trabajos de ese prov.
    }
    
    
      @PutMapping("/crearTrabajoProveedor")//mando el id del trabajo para poder modificar ese trabajo
    public ResponseEntity<Trabajo> crearTrabajoProv(@RequestBody Trabajo t) throws MiException{
        //tengo que usar el trabajo q tenia, y modifico, el tema de los costos.
        
        try{
        Trabajo trabajo = trabajoServi.crearTrabajoProv(t);
         
            System.out.println("exito trabajo modificado");
            return ResponseEntity.ok(trabajo);
        }catch(MiException ex){
            
            System.out.println(ex.getMessage());
            return ResponseEntity.badRequest().body(null);
        }
        
    }
    
    
       @PutMapping("/modificar/{id}")
    public ResponseEntity<Trabajo> modificarTrabajo(@PathVariable Long id, @RequestBody Trabajo t) throws MiException{
        try{
         Trabajo trabajo = trabajoServi.update(id, t);
         
            System.out.println("exito trabajo modificado");
            return ResponseEntity.ok(trabajo);
        }catch(MiException ex){
            
            System.out.println(ex.getMessage());
            return ResponseEntity.badRequest().body(null);
        }
        
    }
    
    @GetMapping("/listaTrabajosEsperando/{id}")
    public ResponseEntity<List<Trabajo>>trabajosEsperandoProv(@PathVariable Long id){
        try{
        List listaTrabajos = trabajoServi.trabajosEsperandoProv(id);
        return ResponseEntity.ok(listaTrabajos);
        
        }catch(Exception e){
            System.out.println(e.getMessage());
             return ResponseEntity.badRequest().body(null);
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
