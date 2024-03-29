
package com.Servicios.HogarExpert.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;


@Entity
@Setter @Getter
public class Comentario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @ManyToOne
    private Proveedor proveedor;
 
    @ManyToOne
    private Usuario usuario;
 
    private String mensaje;
    private Integer calificacion;

    public Comentario() {
    }

    public Comentario(Long id, Proveedor proveedor,  Usuario usuario, String mensaje, Integer calificacion) {
        this.id = id;
        this.proveedor = proveedor;
        this.usuario = usuario;
        this.mensaje = mensaje;
        this.calificacion = calificacion;
    }

    
   
    
    
    
    
}
