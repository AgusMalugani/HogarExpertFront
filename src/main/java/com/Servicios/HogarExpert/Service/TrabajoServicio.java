/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Entity.Proveedor;
import com.Servicios.HogarExpert.Entity.Trabajo;
import com.Servicios.HogarExpert.Entity.Usuario;
import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Repository.IProveedorRepositorio;
import com.Servicios.HogarExpert.Repository.ITrabajoRepositorio;
import com.Servicios.HogarExpert.Repository.IUsuarioRepositorio;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Usuario
 */
@Service
public class TrabajoServicio implements ITrabajoServicio {
    @Autowired
    ITrabajoRepositorio trabajoRepo;
    @Autowired
    IProveedorRepositorio proveedorRepo;
    @Autowired
    IUsuarioRepositorio usuarioRepo;
    
    
    @Transactional
    @Override
    public void save(Trabajo t) throws MiException {
    this.validar(t);
    trabajoRepo.save(t);
    }
    
    @Transactional
    @Override
    public void delete(Long num_trabajo) throws MiException {
    Optional<Trabajo> respuesta = trabajoRepo.findById(num_trabajo);
            if (respuesta == null || respuesta.isEmpty() ) {
                throw new MiException("No hay trabajos con esa id");
            }
            Trabajo t = respuesta.get();
            

            usuarioRepo.deleteById(t.getNum_trabajo());
  }

    @Override
    public List<Trabajo> findAll() {
        return trabajoRepo.findAll();
    }

    @Override
    public Trabajo findById(Long num_trabajo) throws MiException {
    Optional<Trabajo> respuesta = trabajoRepo.findById(num_trabajo);
            
            
            if (respuesta == null || respuesta.isEmpty()) {
                throw new MiException("No se encontro trabajo con el id ingresado");
            }
            
            if (respuesta.isPresent()) {
                Trabajo t = respuesta.get();
                return t;
            } else {
                return null;
            }

        }
    
    
    @Transactional
    @Override
    public void update(Long num_trabajo, Trabajo t) throws MiException {
    Optional<Trabajo> respuesta = trabajoRepo.findById(num_trabajo);
            if (respuesta == null || respuesta.isEmpty()) {
                throw new MiException("No se encontro trabajo con esa id");
            }

            if (respuesta.isPresent()) {
                this.validar(t);

                Trabajo trabajo = t;
                trabajo.setNum_trabajo(num_trabajo);
                
                
                
                trabajoRepo.save(trabajo);
                System.out.println("trabajo modificado");

            }

        }

    @Override
    public void validar(Trabajo t) throws MiException {
        if (t.getProveedor().getId() == null) {
            throw new MiException("El id del proveedor es nulo");
        }
        if (t.getUsuario().getId() == null) {
            throw new MiException("El id del usuario es nulo");

        }
        if (t.getHorasTrabajo() == null || t.getHorasTrabajo() <= 0) {
            throw new MiException("Las horas de trabajo debe ser mayor a 0");

        }
        if(t.getTotal() <= 0 ){
            t.setTotal( t.getHorasTrabajo()*t.getProveedor().getCostoXHora() );
        }
        
        Optional<Proveedor>respuestaProv = proveedorRepo.findById(t.getProveedor().getId());
        if(respuestaProv.isEmpty()){
            throw new MiException("No se encontraron proveedores con la id ingresada.");
        }
        Optional<Usuario>respuestaUsuario = usuarioRepo.findById(t.getUsuario().getId());
        if(respuestaUsuario.isEmpty()){
            throw new MiException("No se encontraron usuarios con la id ingresada.");
        }
        
        

    }

}
