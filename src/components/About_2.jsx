import React, { Fragment } from 'react';
import Mockup from '../img/mockup.jpg'



const About_2 = () => {




    return (
        <Fragment>
            <section className="sect-about">
                
                <h2 className="text-center py-5 text-white text-uppercase">About</h2>
                <div className="row no-gutters mx-auto my-3 pb-5 d-flex align-item-center">
                    <div className="img-fluid col-5 ml-5">
                        <img  className="imgAbout w-100"src={Mockup} alt="" />

                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">

                        <p className="presentation">Jeune développeuse web issu de la formation passerelle de codage à Molengeek de Bruxelles, je maîtrise les technologies front-end, notamment Html, Css, et JavaScript avec les frameworks Bootstrap et React je fait aussi du back-end, et particulièrement Laravel et PHP. Pour les CMS, je me suis familiarisé avec le WordPress.
                        Pour la partie gestion de projets, j’ai des connaissances en méthode agile ainsi que l’outil Git pour la gestion de version de projet.

                        Je suis à l'écoute d'opportunités en développement de site et application web.
                        Je suis particulièrement intéressé par le développement en langage JavaScript et ses frameworks.</p>
                        <button className="btnAbout btn btn-info"><a href=""><strong>Mes créations</strong></a></button>
                    </div>
                </div>

            </section>

        </Fragment>

    );
}

export default About_2;
