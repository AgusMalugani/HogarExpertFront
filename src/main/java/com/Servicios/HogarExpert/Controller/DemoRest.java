/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Controller;

import com.Servicios.HogarExpert.Entity.AuthenticationReq;
import com.Servicios.HogarExpert.Entity.Proveedor;
import com.Servicios.HogarExpert.Entity.TokenInfo;
import com.Servicios.HogarExpert.Entity.Usuario;
import com.Servicios.HogarExpert.Repository.IProveedorRepositorio;
import com.Servicios.HogarExpert.Repository.IUsuarioRepositorio;
import com.Servicios.HogarExpert.Service.JwtUtilService;

import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class DemoRest {


  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  UserDetailsService usuarioDetailsService;

  @Autowired
  private JwtUtilService jwtUtilService;
  @Autowired
  private IUsuarioRepositorio usuarioRepo;
  @Autowired
  private IProveedorRepositorio proveedorRepo;
  
  
  private static final Logger logger = LoggerFactory.getLogger(DemoRest.class);

  
  @GetMapping("/usuarioLog")
  public ResponseEntity<?> traerUsuario() {

    var auth =  SecurityContextHolder.getContext().getAuthentication();
 
    Map<String, String> mensaje = new HashMap<>();
    if(auth.getPrincipal() instanceof UserDetails){
        String username = ((UserDetails)auth.getPrincipal()).getUsername();
        Usuario usuario = usuarioRepo.findByUsername(username); // obtengo los datos del usuario
        
              if(usuario != null){
    logger.info("Datos del Usuario: {}", auth.getPrincipal());
    logger.info("Datos de los Permisos {}", auth.getAuthorities());
    logger.info("Esta autenticado {}", auth.isAuthenticated());
    return ResponseEntity.ok(usuario);
        
     
            }else {
                Proveedor proveedor = proveedorRepo.findByUsername(username);
                if (proveedor != null) {
                    logger.info("Proveedor autenticado: {}", proveedor);
                    logger.info("Datos de los Permisos: {}", auth.getAuthorities());
                    logger.info("Está autenticado: true");
                    return ResponseEntity.ok(proveedor);
                }
                
                
              }
    }
                else{
        mensaje.put("principal", "no es instancia de userdetails" );
    
    return ResponseEntity.ok(mensaje);
    }
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No autorizado");
 
    
    
 }
  




  @PostMapping("/login")
  public ResponseEntity<TokenInfo> authenticate(@RequestBody AuthenticationReq authenticationReq) {
    logger.info("Autenticando al usuario {}", authenticationReq.getUsername());
try{
    
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(authenticationReq.getUsername(),
            authenticationReq.getClave()));

    final UserDetails userDetails = usuarioDetailsService.loadUserByUsername(
        authenticationReq.getUsername());

    final String jwt = jwtUtilService.generateToken(userDetails);

    return ResponseEntity.ok(new TokenInfo(jwt));
    
}
catch(AuthenticationException e){
    System.out.println(e.getMessage());
    return ResponseEntity.badRequest().body(null);
}
  }

}
