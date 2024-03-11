/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Entity;

import com.Servicios.HogarExpert.Enum.Rol;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import java.util.Set;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Entity 
@Setter @Getter
@Builder
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombre;
    private String apellido;
    private Integer dni;
    private String celular;
    private String domicilio;
    private String username;
    private String email;
    private String password;
    //@Enumerated
    //private Rol rol;

    @Override
    public String toString() {
        return "Usuario{" + "id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", dni=" + dni + ", celular=" + celular + ", domicilio=" + domicilio + ", username=" + username + ", email=" + email + ", password=" + password + ", roles=" + roles + ", imagen=" + imagen + '}';
    }
    
      private Set<String> roles;
    @OneToOne
    private Imagen imagen;

    public Usuario() {
    }

    public Usuario(Long id, String nombre, String apellido, Integer dni, String celular, String domicilio, String username, String email, String password, Set<String> roles, Imagen imagen) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.celular = celular;
        this.domicilio = domicilio;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.imagen = imagen;
    }

  
  
    
    
    
    
    
}
