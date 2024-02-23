/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Entity.Imagen;
import com.Servicios.HogarExpert.Repository.ImagenRepositorio;
import jakarta.transaction.Transactional;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Usuario
 */
@Service
public class ImagenServicio implements IImagenServicio {
    @Autowired
    ImagenRepositorio ir ;

    @Transactional
    @Override
    public Imagen guardarImagen(MultipartFile archivo) {
         
         if(archivo != null){    
         try {
         Imagen img = new Imagen();
      
        img.setMime(archivo.getContentType());
        img.setNombre(archivo.getName());
        img.setContenido(archivo.getBytes());
        return ir.save(img);
    
        } catch (IOException ex) {
             System.out.println(ex.getMessage());
             System.out.println("error");
             return null;
             
        }
         }
    return null;
             
    }
    
    
}
