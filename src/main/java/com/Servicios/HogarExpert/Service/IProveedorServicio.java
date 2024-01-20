/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Entity.Proveedor;
import com.Servicios.HogarExpert.Exception.MiException;
import java.util.List;

/**
 *
 * @author Usuario
 */
public interface IProveedorServicio {
    
        
    public void save(Proveedor prov) throws MiException;
    public void delete(Long id) throws MiException;
    public List<Proveedor>findAll() ;
    public Proveedor findById(Long id) throws MiException;
    public void update(Long id,Proveedor prov) throws MiException;
    
    public void validar(Proveedor prov) throws MiException;
    
    
}
