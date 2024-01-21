
package com.Servicios.HogarExpert.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;


@Entity
@Setter @Getter
public class Comentario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_comentario;
    
    @OneToOne
    private Proveedor proveedor;
    @OneToOne
    private Trabajo trabajo;
    @OneToOne
    private Usuario usuario;
 
    private String mensaje;
    private Integer calificacion;

    public Comentario() {
    }

    public Comentario(Long id_comentario, Proveedor proveedor, Trabajo trabajo, Usuario usuario, String mensaje, Integer calificacion) {
        this.id_comentario = id_comentario;
        this.proveedor = proveedor;
        this.trabajo = trabajo;
        this.usuario = usuario;
        this.mensaje = mensaje;
        this.calificacion = calificacion;
    }

   
    
    
    
    
}
