/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Servicios.HogarExpert.Repository;

import com.Servicios.HogarExpert.Entity.Proveedor;
import com.Servicios.HogarExpert.Enum.Servicio;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Usuario
 */
@Repository
public interface IProveedorRepositorio extends JpaRepository<Proveedor,Long> {
    
    @Query("SELECT p FROM Proveedor p WHERE p.servicio = :servicio")
    public List<Proveedor> buscarPorServicio(@Param("servicio")Servicio servicio); 
    
    
}
