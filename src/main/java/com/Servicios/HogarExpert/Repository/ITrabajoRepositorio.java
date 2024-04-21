/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Servicios.HogarExpert.Repository;

import com.Servicios.HogarExpert.Entity.Trabajo;
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
public interface ITrabajoRepositorio extends JpaRepository<Trabajo, Long> {
    @Query("SELECT t FROM Trabajo t WHERE t.proveedor.id = :id")
    public List<Trabajo>listaTrabajosPorProveedor(@Param("id") Long id);
    
       @Query("SELECT t FROM Trabajo t WHERE t.usuario.id = :id")
    public List<Trabajo>listaTrabajosPorUsuario(@Param("id") Long id);
    
    @Query("SELECT t FROM Trabajo t WHERE t.estado = 'ESPERANDO' AND t.proveedor.id = :id AND t.total = 0")
    public List<Trabajo>listaTrabajosEsperandoProveedor(@Param("id") Long id);
    
    @Query("SELECT t FROM Trabajo t WHERE t.estado = 'ESPERANDO' AND t.usuario.id = :id AND t.total > 0")
    public List<Trabajo>listaTrabajoEsperandoUsuario(@Param("id") Long id);
    
  
}
