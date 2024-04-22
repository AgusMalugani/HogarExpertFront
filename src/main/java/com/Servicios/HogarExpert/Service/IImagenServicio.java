/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Entity.Imagen;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Usuario
 */
public interface IImagenServicio {
    public Imagen guardarImagen(MultipartFile archivo);  
    
    
}
