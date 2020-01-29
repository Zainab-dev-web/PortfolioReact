import React, { Fragment } from 'react';



const Footer = () => {




    return (
        <Fragment>
            <section className="sectIcone  py-5 d-flex justify-content-center">
                <div className="row no-gutters ">
                    <div className="col-8">
                        <ul className="ftrAncre d-flex text-white " >

                            <li className="nav-item text-uppercase">
                                <a className="nav-link " href="#service"><strong>Service</strong></a>
                            </li>
                            <li className="nav-item text-uppercase">
                                <a className="nav-link" href="#about"><strong>About</strong></a>
                            </li>
                            <li className="nav-item text-uppercase">
                                <a className="nav-link" href="#competence"><strong>Competénce</strong></a>
                            </li>
                            <li className="nav-item text-uppercase">
                                <a className="nav-link" href="#creation"><strong>Création</strong></a>
                            </li>
                            <li className="nav-item text-uppercase">
                                <a className="nav-link" href="#contact"><strong>Contact</strong></a>
                            </li>

                        </ul>
                    </div>


                    {/* tout le code de code pen -test */}



                    <div className="row ">

                        <ul class="social-networks spin-icon ftrIcone justify-content-center">
                            <li><a href="https://www.linkedin.com/" class="icon-linkedin">LinkedIn</a></li>
                            <li><a href="https://twitter.com/" class="icon-twitter">Twitter</a></li>
                            <li><a href="https://www.facebook.com/" class="icon-facebook">Facebook</a></li>
                            <li><a href="https://twitch.tv" class="icon-twitch">Twitch</a></li>
                            <li><a href="https://github.com" class="icon-github">GitHub</a></li>
                            <li><a href="https://pinterest.com" class="icon-pinterest">Pinterest</a></li>
                            <li><a href="https://instagram.com" class="icon-instagram">Instagram</a></li>
                            <li><a href="https://vimeo.com" class="icon-vimeo">Vimeo</a></li>
                        </ul>
                    </div>





                </div>
            </section >
            <section className="py-4 copy">
                <p className="text-center text-secondary">&copy; Copyright, by ZaïDev 2020 </p>
            </section>
        </Fragment >

    );
}

export default Footer;
