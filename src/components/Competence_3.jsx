import React, { Fragment } from 'react';
import MySQL from '../img/mysql-svg.png'



const Competence_3 = () => {




  return (
    <Fragment>
      <section className="py-5"id="competence">
        <h2 className="text-center py-5 text-uppercase" >Mes compétences</h2>
        <section class="section">

          <div class="wall ">
            <div class="v-boxes">
              <div class="box">
                <span class="tooltip">CSS</span>
                <div class="box-face">
                  <div class="box-text"><i class="fab fa-css3-alt"></i></div>
                </div>
                <div class="box-back">
                  <div class="box-text">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div class="box">
                <span class="tooltip">JavaScript</span>
                <div class="box-face">
                  <div class="box-text"><i class="fab fa-js-square"></i></div>
                </div>
                <div class="box-back">
                  <div class="box-text">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>
              </div>
              <div class="box">
                <span class="tooltip">HTML</span>
                <div class="box-face">
                  <div class="box-text">
                    <i class="fab fa-html5"></i>
                  </div>
                </div>
                <div class="box-back">
                  <div class="box-text">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div class="box">
                <span class="tooltip">MySQL</span>
                <div class="box-face">
                  <div class="box-text"><img src={MySQL} alt="" /></div>
                </div>
                <div class="box-back">
                  <div class="box-text">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="v-boxes second">
              <div class="box">
                <span class="tooltip">PHP</span>
                <div class="box-face">
                  <div class="box-text"><i class="fab fa-php"></i></div>
                </div>
                <div class="box-back">
                  <div class="box-text">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>
              </div>
              <div class="box">
                <span class="tooltip">Laravel</span>
                <div class="box-face">
                  <div class="box-text"><i class="fab fa-laravel"></i></div>
                </div>
                <div class="box-back">
                  <div class="box-text">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div class="box">
                <span class="tooltip">Python</span>
                <div class="box-face">
                  <div class="box-text"><i class="fab fa-python"></i></div>
                </div>
                <div class="box-back">
                  <div class="box-text">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="v-boxes third">
              <div class="box">
                <span class="tooltip">Sass</span>
                <div class="box-face">
                  <div class="box-text">
                    <i class="fab fa-sass"></i>
                  </div>
                </div>
                <div class="box-back">
                  <div class="box-text">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>
              </div>
              <div class="box">
                <span class="tooltip">React</span>
                <div class="box-face">
                  <div class="box-text"><i class="fab fa-react"></i></div>
                </div>
                <div class="box-back">
                  <div class="box-text">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="v-boxes forth">
              <div class="box link">
                <div class="box-face">
                  <div class="box-text"><a href="https://github.com/Zainab-dev-web"><i class="fab fa-github-alt"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fragment>

  );
}

export default Competence_3;
