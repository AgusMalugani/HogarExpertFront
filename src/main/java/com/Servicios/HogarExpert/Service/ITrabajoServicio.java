/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Entity.Trabajo;
import com.Servicios.HogarExpert.Exception.MiException;
import java.util.List;

/**
 *
 * @author Usuario
 */
public interface ITrabajoServicio {
    public Trabajo save(Trabajo t) throws MiException;
    
    public void delete(Long id) throws MiException;
    
    public List<Trabajo>findAll(Long id) ;
    
    public Trabajo findById(Long id) throws MiException;
    
    public void update(Long id,Trabajo t) throws MiException;
    
     public Trabajo crearTrabajoProv(Trabajo t) throws MiException;
    
    public void validar(Trabajo t) throws MiException;
    
}
