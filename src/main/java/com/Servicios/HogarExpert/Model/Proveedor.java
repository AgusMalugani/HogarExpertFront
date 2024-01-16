/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Model;

import com.Servicios.HogarExpert.Enum.Rol;
import com.Servicios.HogarExpert.Enum.Servicio;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
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
    private String nombre;
    private String apellido;
    private Integer dni;
    private String celular;
    private String domicilio;
    private String email;
    private String password;
    @Enumerated
    private Rol rol;

    
    private String nombreEmpresa;
    private String matricula;
    private Servicio servicio;
    private double costoXHora;
    
    @OneToMany
    private List<Comentario>comentarios;

    public Proveedor() {
    }

    public Proveedor(Long id, String nombre, String apellido, Integer dni, String celular, String domicilio, String email, String password, Rol rol, String nombreEmpresa, String matricula, Servicio servicio, double costoXHora, List<Comentario> comentarios) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.celular = celular;
        this.domicilio = domicilio;
        this.email = email;
        this.password = password;
        this.rol = rol;
        this.nombreEmpresa = nombreEmpresa;
        this.matricula = matricula;
        this.servicio = servicio;
        this.costoXHora = costoXHora;
        this.comentarios = comentarios;
    }

   
    
    
    
    
    
}
