/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Servicios.HogarExpert.Entity;

import java.io.Serializable;

public class AuthenticationReq implements Serializable {

  private static final long serialVersionUID = 1L;

  private String username;

  private String clave;

    public AuthenticationReq() {
    }

    public AuthenticationReq(String username, String clave) {
        this.username = username;
        this.clave = clave;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

  
  
  
  
}
