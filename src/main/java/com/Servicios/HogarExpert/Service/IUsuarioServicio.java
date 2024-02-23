/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Entity.Usuario;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Usuario
 */
public interface IUsuarioServicio {
    
    public Usuario save(Usuario usuario, MultipartFile archivo) throws MiException;
    public void delete(Long id) throws MiException;
    public List<Usuario>findAll() ;
    public Usuario findById(Long id) throws MiException;
    public void update(Long id,Usuario usuario) throws MiException;
    
    public void validar(Usuario usuario) throws MiException;
    
}
