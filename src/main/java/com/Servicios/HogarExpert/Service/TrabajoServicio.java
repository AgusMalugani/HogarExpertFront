/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Entity.Proveedor;
import com.Servicios.HogarExpert.Entity.Trabajo;
import com.Servicios.HogarExpert.Entity.Usuario;
import com.Servicios.HogarExpert.Enum.EstadoTrabajo;
import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Repository.IProveedorRepositorio;
import com.Servicios.HogarExpert.Repository.ITrabajoRepositorio;
import com.Servicios.HogarExpert.Repository.IUsuarioRepositorio;
import jakarta.transaction.Transactional;
import java.time.LocalDate;
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
    public Trabajo save(Trabajo t) throws MiException {
         
        //traigo nota, usuario,proveedor.
        Long usuarioId = t.getUsuario().getId();
        Long proveedorId = t.getProveedor().getId();

        System.out.println(usuarioId);
        System.out.println(proveedorId);

        if (usuarioId == null || proveedorId == null) {
            throw new MiException("UsuarioId o ProveedorId es null");
        }

        Usuario u = usuarioRepo.findById(usuarioId).orElse(null);
        Proveedor p = proveedorRepo.findById(proveedorId).orElse(null);

        t.setUsuario(u);
        t.setProveedor(p);

        t.setEstado(EstadoTrabajo.ESPERANDO);

        // total, y horas trabajo estara null 
        t.setFechaInicio(LocalDate.now());
        trabajoRepo.save(t);
        return t;
    }

    
    @Transactional
    @Override
    public void delete(Long id) throws MiException {
    Optional<Trabajo> respuesta = trabajoRepo.findById(id);
            if (respuesta == null || respuesta.isEmpty() ) {
                throw new MiException("No hay trabajos con esa id");
            }
            if(respuesta.isPresent()){
            Trabajo t = respuesta.get();
            

            trabajoRepo.delete(t);
      
            }
            }
     
    @Override
    public List<Trabajo> findAllProv(Long id) {
        return trabajoRepo.listaTrabajosPorProveedor(id);
    }

    @Override
    public List<Trabajo> findAllUsuario(Long id) {
        return trabajoRepo.listaTrabajosPorUsuario(id);
    }

    @Override
    public Trabajo findById(Long id) throws MiException {
        Optional<Trabajo> respuesta = trabajoRepo.findById(id);

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
    public Trabajo crearTrabajoProv(Trabajo t) throws MiException { // esto me enviara e el prov.

        trabajoRepo.save(t); // una vez completado. el trabajo, se envia al usuario y espera aceptacion.
        System.out.println("trabajo completado.");

        return t;
    }

    @Transactional
    @Override
    public Trabajo update(Long id, Trabajo t) throws MiException {
        Optional<Trabajo> respuesta = trabajoRepo.findById(id);
        if (respuesta == null || respuesta.isEmpty()) {
            throw new MiException("No se encontro trabajo con esa id");
        }
        if (respuesta.isPresent()) {
           
            Trabajo trabajo = t;
            trabajo.setId(id);
            if(trabajo.getEstado().equals(EstadoTrabajo.FINALIZADO)){
                trabajo.setFechaFin(LocalDate.now());
            }
            trabajoRepo.save(trabajo);
            System.out.println("trabajo modificado");
            return trabajo;

        }
        return null;

    }

   
   

    @Override
    public List<Trabajo> trabajosEsperandoProv(Long id) {
        return trabajoRepo.listaTrabajosEsperandoProveedor(id);
    }

    @Override
    public List<Trabajo> trabajosEsperandoUsuario(Long id) {
        return trabajoRepo.listaTrabajoEsperandoUsuario(id);
    }

}
