/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.DTO;

import com.Servicios.HogarExpert.Entity.Usuario;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Usuario
 */
@Getter @Setter
public class UsuarioDTO {
  
    private Usuario usuario;
    private MultipartFile archivo;

    public UsuarioDTO() {
    }

    public UsuarioDTO(Usuario usuario, MultipartFile archivo) {
        this.usuario = usuario;
        this.archivo = archivo;
    }
    
    

  
}
