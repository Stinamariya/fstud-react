import React from 'react'
import NavBar from './NavBar'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>FISAT ENGINEERING COLLEGE ANKAMALY</b></h1></center><br />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.ytimg.com/vi/TXjfTDIy-do/hqdefault.jpg"height="350px" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://s3service.hitbullseye.com/s3fs-public/fist_school_sign.jpg?null"height="350px" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPj5YkA-1hTKlhdXZ2lhZYJgma-7Jd9Og9NA&s"height="350px" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home