import React, { Fragment } from 'react';
import BG from "../img/bg-creation3.jpg"
import img1 from "../img/portfolio-site-chef.png"
import img2 from "../img/portfolio-site-chef2.png"
import img3 from "../img/portfolio-site-chef3.png"
import img4 from "../img/portfolio-site-emporium.png"
import img5 from "../img/portfolio-site-emporium2.png"


const Creation_4 = () => {




  return (
    <Fragment>
      <section className="sect-creation"id="creation">
        <div className=" text-center py-5 ">
<h2 className="text-white" >Mes creations</h2>
          {/* <img className="img-Creation w-100" src={BG} alt="" /> */}
          <div className="text-center w-75 row no-gutters d-flex jusfify-content-center mx-auto">
            <div className="col-12 my-5 ">
              <button className="btnChoix btn btn-dark text-light px-3 mx-1">Tout</button>
              <button className="btnChoix btn btn-dark text-light px-3 mx-1">Projets indivuduels</button>
              <button className="btnChoix btn btn-dark text-light px-3 mx-1">Projets en groupe</button>
            </div>
            
          </div>
          <div id="carouselExampleIndicators" class="carousel slide w-50 mx-auto  my-3" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={img4} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={img5} class="d-block w-100" alt="..." />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

    </Fragment>

  );
}

export default Creation_4;
