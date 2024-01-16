/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Model.Usuario;
import java.util.List;

/**
 *
 * @author Usuario
 */
public interface IUsuarioServicio {
    
    public void save(Usuario usuario);
    public void delete(Long id);
    public List<Usuario>findAll();
    public Usuario findById(Long id);
    public void update(Long id,Usuario usuario);
    
    public void validar(Usuario usuario);
    
}
