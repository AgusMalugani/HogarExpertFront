/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Entity.Comentario;
import com.Servicios.HogarExpert.Entity.Proveedor;
import com.Servicios.HogarExpert.Entity.Trabajo;
import com.Servicios.HogarExpert.Entity.Usuario;
import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Repository.IComentarioRepositorio;
import com.Servicios.HogarExpert.Repository.IProveedorRepositorio;
import com.Servicios.HogarExpert.Repository.IUsuarioRepositorio;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Servicios.HogarExpert.Repository.ITrabajoRepositorio;

@Service
public class ComentarioServicio implements IComentarioServicio {

    @Autowired
    IComentarioRepositorio comRepo;

    @Autowired
    IProveedorRepositorio provRepo;
    @Autowired
    IUsuarioRepositorio usuarioRepo;
    @Autowired
    ITrabajoRepositorio trabRepo;

    @Transactional
    @Override
    public Comentario save(Comentario com) throws MiException {
       // this.validar(com);

         return comRepo.save(com);

    }

    @Override
    public void delete(Long id) throws MiException {
        if (id == null) {
            throw new MiException("id vacia");
        }
        Optional<Comentario> respuesta = comRepo.findById(id);

        if (respuesta.isEmpty()) {
            throw new MiException("No existe un comentario con la id ingresada.");
        }

        if (respuesta.isPresent()) {

            Comentario c = respuesta.get();
            comRepo.deleteById(c.getId());

        }

    }

    @Override
    public List<Comentario> findAll() {
   
    return comRepo.findAll();
    }

    @Override
    public List<Comentario> findByIdProveedor(Long id) throws MiException {
       try{
        List<Comentario> comentariosProveedor= comRepo.findByIdProveedor(id);
        return comentariosProveedor;
       }catch(Exception e){
           System.out.println(e.getMessage());
           return null;
       }
       
    }

    @Transactional
    @Override
    public void update(Long id, Comentario com) throws MiException {

        Optional<Comentario> respuesta = comRepo.findById(id);
        if (respuesta == null || respuesta.isEmpty()) {
            throw new MiException("No se encontro usuario con esa id");
        }

        if (respuesta.isPresent()) {
            this.validar(com);

            Comentario c = com;
            c.setId(id);

            comRepo.save(c);
            System.out.println("comentario modificado");

        }

    }

    @Override
    public void validar(Comentario com) throws MiException {
        if (com.getMensaje().isEmpty() || com.getMensaje() == null) {
            throw new MiException("Debe ingresar un mensaje");
        }
        if (com.getProveedor().getId() == null) {
            throw new MiException("Debe ingresar el id del proveedor");
        }
     //   if (com.getTrabajo().getNum_trabajo() == null) {
       //     throw new MiException("Debe ingresar el numero de trabajo");
       // }
        if (com.getUsuario().getId() == null) {
            throw new MiException("Debe ingresar el id del usuario");
        }

        if (com.getCalificacion() < 0 || com.getCalificacion() > 5) {
            throw new MiException("Debe ingrear un calificacion entre 0 y 5");
        }

        Optional<Proveedor> respuestaProveedor = provRepo.findById(com.getProveedor().getId());
        if (respuestaProveedor.isEmpty()) {
            throw new MiException("No hay proveedores con esa id");
        }
        Optional<Usuario> respuestaUsuario = usuarioRepo.findById(com.getUsuario().getId());
        if (respuestaUsuario.isEmpty()) {
            throw new MiException("No hay usuarios con esa id");
        }
//        Optional<Trabajo> respuestaTrabajo = trabRepo.findById(com.getTrabajo().getNum_trabajo());
  //      if (respuestaTrabajo.isEmpty()) {
    //        throw new MiException("No hay trabajos con ese numero");
     //   }

    }

}
