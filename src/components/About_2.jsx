import React, { Fragment , useEffect, useState } from 'react';
import Mockup from '../img/mockup.jpg'



const About_2 = () => {

    const [change, setChange] = useState("img-fluid container col-12 col-sm-12 col-md-5 col-lg-5 ml-5")
    const [change2 , setChange2]= useState("col-12 col-sm-12 col-md-5 col-lg-5")
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >1100 ) {
                console.log(window.scrollY)
                setChange('img-fluid container col-12 col-sm-12 col-md-5 col-lg-5 ml-5 animated fadeInLeft ')
                setChange2("col-12 col-sm-12 col-md-5 col-lg-5 animated fadeInRight")

            } else {
                setChange("img-fluid container col-12 col-sm-12 col-md-5 col-lg-5 ml-5  ")
                setChange2("col-12 col-sm-12 col-md-5 col-lg-5")
            }
        })
    })



    return (
        <Fragment>
            <section className="sect-about" id="about">
                
                <h2 className="text-center py-5 text-white text-uppercase">About</h2>
                <div className="row no-gutters mx-auto my-3 pb-5 d-flex align-item-center">
                    <div className={change}>
                        <img  className="imgAbout"src={Mockup} alt="Responsive image" />

                    </div>
                    <div className="col-1"></div>
                    <br/>
                    <div className={change2}>

                        <p className="presentation">Jeune développeuse web issu de la formation passerelle de codage à Molengeek de Bruxelles, je maîtrise les technologies front-end, notamment Html, Css, et JavaScript avec les frameworks Bootstrap et React je fait aussi du back-end, et particulièrement Laravel et PHP. Pour les CMS, je me suis familiarisé avec le WordPress.
                        Pour la partie gestion de projets, j’ai des connaissances en méthode agile ainsi que l’outil Git pour la gestion de version de projet.

                        Je suis à l'écoute d'opportunités en développement de site et application web.
                        Je suis particulièrement intéressée par le développement en langage JavaScript et ses frameworks.</p>
                        <button className=" btn btn-info"><a className="btnAbout"href="#creation"><strong>Mes créations</strong></a></button>
                    </div>
                </div>

            </section>

        </Fragment>

    );
}

export default About_2;
