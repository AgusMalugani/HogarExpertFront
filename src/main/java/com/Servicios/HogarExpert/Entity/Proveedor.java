/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Entity;

import com.Servicios.HogarExpert.Enum.Rol;
import com.Servicios.HogarExpert.Enum.Servicio;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import java.util.List;
import java.util.Set;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Usuario
 */
@Entity
@Getter @Setter
public class Proveedor {
        @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombreEmpresa;
    private String matricula;
    private String email;
    private String password;
    private String celular;   
    private String username;
    private Set<String> roles;
    
    @Enumerated(EnumType.STRING)
    private Servicio servicio;

    @OneToOne
    private Imagen imagen;
    
    private String localidad;
    private String descripcion;
    
  

    public Proveedor() {
    }

    public Proveedor(Long id, String nombreEmpresa, String matricula, String email, String password, String celular, String username, Set<String> roles, Servicio servicio, Imagen imagen, String localidad, String descripcion) {
        this.id = id;
        this.nombreEmpresa = nombreEmpresa;
        this.matricula = matricula;
        this.email = email;
        this.password = password;
        this.celular = celular;
        this.username = username;
        this.roles = roles;
        this.servicio = servicio;
        this.imagen = imagen;
        this.localidad = localidad;
        this.descripcion = descripcion;
    }

 

 

   


    
   
    
    
    
    
    
}
