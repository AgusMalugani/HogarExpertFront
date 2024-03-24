/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Controller;

import com.Servicios.HogarExpert.Entity.Proveedor;
import com.Servicios.HogarExpert.Entity.Usuario;
import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Service.IImagenServicio;
import com.Servicios.HogarExpert.Service.IProveedorServicio;
import com.Servicios.HogarExpert.Service.IUsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.service.annotation.HttpExchange;

/**
 *
 * @author Usuario
 */
@RestController

@RequestMapping("/imagen")
@CrossOrigin("*")
public class ImagenControlador {
    @Autowired
    IUsuarioServicio us;
    @Autowired
    IImagenServicio is;
    @Autowired
    IProveedorServicio ps;
    

        // es necesario para que solo puedan verlo las personas que esten logueadas
    @GetMapping("/perfil/{id}")
    public ResponseEntity<byte[]> imagenUsuario(@PathVariable Long id) throws MiException{
        Usuario u = us.findById(id);
        
        byte[] imagen = u.getImagen().getContenido();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        
        
        
        return new ResponseEntity<>(imagen,headers,HttpStatus.OK);
        
        
    }
    
    @GetMapping("/detalle/{id}")
    public ResponseEntity<byte[]> imagenProveedor (@PathVariable Long id) throws MiException{
        Proveedor p = ps.findById(id);
        
        byte[] imagen = p.getImagen().getContenido();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        
        
        
        return new ResponseEntity<>(imagen,headers,HttpStatus.OK);
        
        
    }
    
    
    
}
