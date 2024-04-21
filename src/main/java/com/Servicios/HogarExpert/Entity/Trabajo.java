/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Entity;

import com.Servicios.HogarExpert.Enum.EstadoTrabajo;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import java.time.LocalDate;
import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Usuario
 */
@Entity
@Getter @Setter
@Builder
public class Trabajo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @ManyToOne
    private Usuario usuario;
    @ManyToOne
    private Proveedor proveedor;     
    private Integer horasTrabajo;
    private double total;    
    private String notaTrabajo;   
    @Enumerated(EnumType.STRING)
    private EstadoTrabajo estado;
    
    private LocalDate fechaInicio;
    private LocalDate fechaFin;

    public Trabajo() {
    }

    public Trabajo(Long id, Usuario usuario, Proveedor proveedor, Integer horasTrabajo, double total, String notaTrabajo, EstadoTrabajo estado, LocalDate fechaInicio, LocalDate fechaFin) {
        this.id = id;
        this.usuario = usuario;
        this.proveedor = proveedor;
        this.horasTrabajo = horasTrabajo;
        this.total = total;
        this.notaTrabajo = notaTrabajo;
        this.estado = estado;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

  

  



  

  
    
    
    
    
    
}
