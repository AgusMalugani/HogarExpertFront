/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Entity.Imagen;
import com.Servicios.HogarExpert.Enum.Rol;
import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Entity.Usuario;
import com.Servicios.HogarExpert.Repository.IUsuarioRepositorio;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Usuario
 */
@Service
public class UsuarioServicio implements IUsuarioServicio {

    @Autowired
    IUsuarioRepositorio usuarioRepo;
    @Autowired
    IImagenServicio imgServ;

    @Transactional
    @Override
    public Usuario save(Usuario usuario, MultipartFile archivo) throws MiException {

        this.validar(usuario);
        List<Usuario> listaUsuario = this.findAll();
         Usuario u = usuario;
         
        for (Usuario aux : listaUsuario) {
            if (aux.getDni().equals(u.getDni())) {
                throw new MiException("Ya existe un usuario con ese DNI");
            }
        }
       Imagen img = imgServ.guardarImagen(archivo);
        
        u.setImagen(img);
         usuarioRepo.save(u);
         return u;
    }

        @Transactional
        @Override
        public void delete(Long id) throws MiException {

           Optional<Usuario> respuesta = usuarioRepo.findById(id);
            if (respuesta == null || respuesta.isEmpty() ) {
                throw new MiException("No hay usuarios con esa id");
            }
            Usuario u = respuesta.get();
            

            usuarioRepo.deleteById(u.getId());

        }

        @Override
        public List<Usuario> findAll() {

        return usuarioRepo.findAll();
        }

        @Override
        public Usuario findById(Long id) throws MiException {
            
            Optional<Usuario> respuesta = usuarioRepo.findById(id);
            
            
            if (respuesta == null || respuesta.isEmpty()) {
                throw new MiException("No se encontro usuarios con el id ingresado");
            }
            
            if (respuesta.isPresent()) {
                Usuario u = respuesta.get();
                return u;
            } else {
                return null;
            }

        }

        @Transactional
        @Override
        public void update(Long id, Usuario usuario) throws MiException {

            Optional<Usuario> respuesta = usuarioRepo.findById(id);
            if (respuesta == null || respuesta.isEmpty()) {
                throw new MiException("No se encontro usuario con esa id");
            }

            if (respuesta.isPresent()) {
                this.validar(usuario);

                Usuario u = usuario;
                u.setId(id);
                
                
                
                usuarioRepo.save(u);
             

            }

        }

        @Override
        public void validar
        (Usuario usuario) throws MiException {
            if (usuario.getNombre() == null || usuario.getNombre().isEmpty()) {
                throw new MiException("El nombre no puede estar vacio");
            }
            if (usuario.getApellido() == null || usuario.getApellido().isEmpty()) {
                throw new MiException("El apellido no puede estar vacio");
            }
            if (usuario.getCelular() == null || usuario.getCelular().isEmpty()) {
                throw new MiException("El celular no puede estar vacio");
            }
            if (usuario.getCelular().length() < 6 || usuario.getCelular().length() > 14) {
                throw new MiException("El numero de celular debe ser un numero valido.");
            }
            if (usuario.getDni() == null) {
                throw new MiException("El dni no puede estar vacio");
            }
            if (usuario.getDomicilio() == null || usuario.getDomicilio().isEmpty()) {
                throw new MiException("El domicilio no puede estar vacio");
            }
            if (usuario.getEmail() == null || usuario.getEmail().isEmpty()) {
                throw new MiException("El email no puede estar vacio");
            }
            if (usuario.getPassword() == null || usuario.getPassword().isEmpty()) {
                throw new MiException("El password no puede estar vacio");
            }
            
            if (usuario.getPassword().length() < 8) {
                throw new MiException("El password debe contener almenos 8 caracteres");
            }
            
            if(usuario.getRol() == null ){
                usuario.setRol(Rol.USER);
            }
            
        }

    }
