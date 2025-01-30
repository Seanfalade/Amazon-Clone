import React from 'react'

const Carosel = () => {
  return (
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='/public/Images/71VcGrxQRBL._SX3000_.jpg' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='public/Images/61lwJy4B8PL._SX3000_.jpg' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='public/Images/61zAjw4bqPL._SX3000_.jpg' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src='public/Images/71Ie3JXGfVL._SX3000_.jpg' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src='public/Images/81KkrQWEHIL._SX3000_.jpg' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src='public/Images/7130x7c9NmL._SX3000_.jpg' className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carosel