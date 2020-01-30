import React, { Fragment, useState, useEffect } from 'react';
import MySQL from '../img/mysql-svg.png'



const Competence_3 = () => {

  const [change3, setChange3] = useState("section")
  useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY >1800 ) {
              console.log(window.scrollY)
              setChange3('section animated rotateIn ')
          } else {
              setChange3("section")
          }
      })
  })


  return (
    <Fragment>
      <section className="py-5"id="competence">
        <h2 className="text-center py-5 text-uppercase" >Mes compétences</h2>
        <section className={change3}>

          <div className="wall ">
            <div className="v-boxes">
              <div className="box">
                <span className="tooltip">CSS</span>
                <div className="box-face">
                  <div className="box-text"><i className="fab fa-css3-alt"></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">JavaScript</span>
                <div className="box-face">
                  <div className="box-text"><i className="fab fa-js-square"></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">HTML</span>
                <div className="box-face">
                  <div className="box-text">
                    <i className="fab fa-html5"></i>
                  </div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">MySQL</span>
                <div className="box-face">
                  <div className="box-text"><img src={MySQL} alt="" /></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="v-boxes second">
              <div className="box">
                <span className="tooltip">PHP</span>
                <div className="box-face">
                  <div className="box-text"><i className="fab fa-php"></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">Laravel</span>
                <div className="box-face">
                  <div className="box-text"><i className="fab fa-laravel"></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">Python</span>
                <div className="box-face">
                  <div className="box-text"><i className="fab fa-python"></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="v-boxes third">
              <div className="box">
                <span className="tooltip">Sass</span>
                <div className="box-face">
                  <div className="box-text">
                    <i className="fab fa-sass"></i>
                  </div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="box">
                <span className="tooltip">React</span>
                <div className="box-face">
                  <div className="box-text"><i className="fab fa-react"></i></div>
                </div>
                <div className="box-back">
                  <div className="box-text">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="v-boxes forth">
              <div className="box link">
                <div className="box-face">
                  <div className="box-text"><a href="https://github.com/Zainab-dev-web"><i className="fab fa-github-alt"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center">
        <button className="btn btn-info my-3 cv">Télécharger mon CV</button></div>
      </section>
    </Fragment>

  );
}

export default Competence_3;
