/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Usuario
 */
@Entity
@Getter @Setter
public class Trabajo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long num_trabajo;
    
    @OneToOne
    private Usuario usuario;
    @OneToOne
    private Proveedor proveedor;
    
    private double total; 
    private boolean estado;

    public Trabajo() {
    }

    public Trabajo(Long num_trabajo, Usuario usuario, Proveedor proveedor, double total, boolean estado) {
        this.num_trabajo = num_trabajo;
        this.usuario = usuario;
        this.proveedor = proveedor;
        this.total = total;
        this.estado = estado;
    }

  
    
    
    
    
    
}
