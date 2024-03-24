/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Service;


import com.Servicios.HogarExpert.Controller.DemoRest;
import com.Servicios.HogarExpert.Entity.Proveedor;
import com.Servicios.HogarExpert.Entity.Usuario;
import com.Servicios.HogarExpert.Repository.IProveedorRepositorio;
import com.Servicios.HogarExpert.Repository.IUsuarioRepositorio;
import java.util.List;
import java.util.Set;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    IUsuarioRepositorio usuarioRepo;
    @Autowired
    IProveedorRepositorio proveedorRepo;
    
    
  private static final Logger logger = LoggerFactory.getLogger(DemoRest.class);
    
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
      
    final Usuario usuario = usuarioRepo.findByUsername(username);
    
    final Proveedor proveedor = proveedorRepo.findByUsername(username);

    if(usuario != null){
        
        logger.info("Roles del usuario {}: {}", username, usuario.getRoles());
        
        return User
        .withUsername(username)
        .password(usuario.getPassword())
        .roles(usuario.getRoles().toArray(new String[0]))
        .build();
        
    } else 
        if(proveedor != null){
            
        logger.info("Roles del usuario {}: {}", username, proveedor.getRoles());
        return User
        .withUsername(username)
        .password(proveedor.getPassword())
        .roles(proveedor.getRoles().toArray(new String[0]))
        .build();
        
    }
    if (usuario == null && proveedor == null) {
      throw new UsernameNotFoundException(username);
      
    }
    
       
       

    return null;
  }
}
