import React from 'react'

export default function CarruselComentarios() {


  return (
    <div id='carrusel-comentarios' >
    <img src="https://zolvers.com/img/home_new/icon-comillas.webp" alt="img-comillas" />

    <h3>LO QUE DICEN NUESTROS CLIENTES</h3>

    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card">
            <div className="card-body">
              <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
              <p className="card-text"><small className="text-muted">- Usuario 1</small></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card">
            <div className="card-body">
              <p className="card-text">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
              <p className="card-text"><small className="text-muted">- Usuario 2</small></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card">
            <div className="card-body">
              <p className="card-text">"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <p className="card-text"><small className="text-muted">- Usuario 3</small></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>


  </div>
  )
}
