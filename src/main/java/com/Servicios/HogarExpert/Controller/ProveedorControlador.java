/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Controller;

import com.Servicios.HogarExpert.Entity.Proveedor;
import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Service.IProveedorServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Usuario
 */
@RestController
@RequestMapping("/proveedor")
@CrossOrigin("*")
public class ProveedorControlador {
    @Autowired
    IProveedorServicio provServ;
    
    
    
    @PostMapping("/crear")
    public ResponseEntity<Proveedor> crearProveedor(@ModelAttribute Proveedor prov, @RequestParam("archivo") MultipartFile archivo) {
        System.out.println("aaa");
        try {
          Proveedor p =  provServ.save(prov,archivo);
            System.out.println("proveedor creado");
            
            return ResponseEntity.status(HttpStatus.OK).body(p);
        } catch (MiException ex) {
            System.out.println(ex.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        
    }
    
    @GetMapping("/detalle/{id}")
    public Proveedor verProveedor(@PathVariable Long id){
        try {
            Proveedor p = provServ.findById(id);
            
            return p;
        } catch (MiException ex) {
            System.out.println(ex.getMessage());
            return null;
            
        }
     
        }
    
    @GetMapping("/lista")
    public List<Proveedor>listaProveedores(){
        
        return provServ.findAll();
    }
    
    

    @PutMapping("/modificar/{id}")
    public void modificarProveedor(@PathVariable Long id, @RequestBody Proveedor prov) throws MiException{
        try{
         provServ.update(id, prov);
         
            System.out.println("exito, proveedor modificado");
        }catch(MiException ex){
            
            System.out.println(ex.getMessage());
        }
        
    }
    
    @DeleteMapping("/eliminar/{id}")
    public void eliminarProveedor(@PathVariable Long id){
        try {
            provServ.delete(id);
            System.out.println(" proveedor eliminado");
        } catch (MiException ex) {
            System.out.println(ex.getMessage());
        }
        
        
    }
    
    
    
}
