/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Entity.Comentario;
import com.Servicios.HogarExpert.Exception.MiException;
import java.util.List;

/**
 *
 * @author Usuario
 */
public interface IComentarioServicio {
    
       public void save(Comentario com) throws MiException;
    public void delete(Long id_comentario) throws MiException;
    public List<Comentario>findAll() ;
    public Comentario findById(Long id_comentario) throws MiException;
    public void update(Long id_comentario,Comentario com) throws MiException;
    
    public void validar(Comentario com) throws MiException;
    
}
