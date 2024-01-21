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
    public void save(Trabajo t) throws MiException;
    public void delete(Long num_trabajo) throws MiException;
    public List<Trabajo>findAll() ;
    public Trabajo findById(Long num_trabajo) throws MiException;
    public void update(Long num_trabajo,Trabajo t) throws MiException;
    
    public void validar(Trabajo t) throws MiException;
    
}
