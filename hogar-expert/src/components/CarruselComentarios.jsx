import React from 'react'

export default function CarruselComentarios() {


  return (
    <div id='carrusel-comentarios' >
    <img src="https://zolvers.com/img/home_new/icon-comillas.webp" alt="img-comillas" />

    <h3>LO QUE DICEN NUESTROS CLIENTES</h3>

    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card">
            <div class="card-body">
              <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
              <p class="card-text"><small class="text-muted">- Usuario 1</small></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <div class="card-body">
              <p class="card-text">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
              <p class="card-text"><small class="text-muted">- Usuario 2</small></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <div class="card-body">
              <p class="card-text">"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <p class="card-text"><small class="text-muted">- Usuario 3</small></p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>


  </div>
  )
}
