/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Service;

import com.Servicios.HogarExpert.Entity.Imagen;
import com.Servicios.HogarExpert.Entity.Proveedor;
import com.Servicios.HogarExpert.Enum.Servicio;
import com.Servicios.HogarExpert.Exception.MiException;
import com.Servicios.HogarExpert.Repository.IProveedorRepositorio;
import jakarta.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Usuario
 */
@Service
public class ProveedorServicio implements IProveedorServicio {

    @Autowired
    private IProveedorRepositorio proveedorRepo;
    @Autowired
    private IImagenServicio imgs;
    
    @Transactional
    @Override
    public Proveedor save(Proveedor prov,MultipartFile archivo) throws MiException {
           this.validar(prov);
    
            List<Proveedor> listaProv = this.findAll();
         Proveedor p = prov;
          p.setPassword(new BCryptPasswordEncoder().encode(p.getPassword()));
         
        for (Proveedor aux : listaProv) {
            if (aux.getMatricula().equals(p.getMatricula())) {
                throw new MiException("Ya existe un usuario con la matricula ingresada");
                
            }
         }
        Imagen i = imgs.guardarImagen(archivo);
        p.setImagen(i);
        
        Set<String> rol = new HashSet<>();
            rol.add("PROVEEDOR");
            p.setRoles(rol);
       
        
            proveedorRepo.save(p);
            return p;
         }

    @Transactional
    @Override
    public void delete(Long id) throws MiException {
   
           Optional<Proveedor> respuesta = proveedorRepo.findById(id);
            if (respuesta == null || respuesta.isEmpty() ) {
                throw new MiException("No hay proveedores con esa id");
            }
            Proveedor p = respuesta.get();
            

            proveedorRepo.deleteById(p.getId());

    
    }

    @Override
    public List<Proveedor> findAll() {
       return proveedorRepo.findAll();
    
    }

    @Override
    public Proveedor findById(Long id) throws MiException {
     
            Optional<Proveedor> respuesta = proveedorRepo.findById(id);
            
            
            if (respuesta == null || respuesta.isEmpty()) {
                throw new MiException("No se encontro proveedor con el id ingresado");
            }
            
            if (respuesta.isPresent()) {
                Proveedor p = respuesta.get();
                return p;
            } else {
                return null;
            }
    
    }

    @Transactional
    @Override
    public void update(Long id, Proveedor prov) throws MiException {
        
            Optional<Proveedor> respuesta = proveedorRepo.findById(id);
            if (respuesta == null || respuesta.isEmpty()) {
                throw new MiException("No se encontro proveedor con esa id");
            }

            if (respuesta.isPresent()) {
                this.validar(prov);

                Proveedor p = prov;
                p.setId(id);
                
                
                
                proveedorRepo.save(p);
                System.out.println("Proveedor modificado");

            }

    
    }

    @Override
    public void validar(Proveedor prov) throws MiException {
        
           if (prov.getCelular() == null || prov.getCelular().isEmpty()) {
                throw new MiException("El celular no puede estar vacio");
            }
            if (prov.getCelular().length() < 6 || prov.getCelular().length() > 14) {
                throw new MiException("El numero de celular debe ser un numero valido.");
            }
        
        if(prov.getCostoXHora() <= 0){
            throw new MiException("Debe ingresar el costo por hora");
        }
        
        if(prov.getEmail() == null || prov.getEmail().isEmpty() || !prov.getEmail().contains("@") ){
            throw new MiException("Debe ingresar un email valido");
        }
        if(prov.getMatricula()== null || prov.getMatricula().isEmpty()){
            throw new MiException("Debe ingresar la matricula del profesional");
        }
        if(prov.getNombreEmpresa()== null || prov.getNombreEmpresa().isEmpty()){
            throw new MiException("Debe ingresar el nombre de la empresa");
        }
       if(prov.getServicio() == null ){
           throw new MiException("Debe ingresar el servicio que brinda");
       }
       
    
    }

    @Override
    public List<Proveedor> findByServicio(Servicio servicio) {
   return proveedorRepo.buscarPorServicio(servicio);
    }
    
}
