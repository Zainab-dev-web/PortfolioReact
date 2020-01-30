import React, { Fragment } from 'react';



const Footer = () => {




    return (
        <Fragment>
            <section className="sectIcone  py-5 text-center">
                <div className="row no-gutters ">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
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


                    



                    <div className="row ">

                        <ul className="social-networks col-12 col-sm-12 col-md-12 col-lg-4 spin-icon ftrIcone justify-content-center">
                            <li><a href="https://www.linkedin.com/" className="icon-linkedin">LinkedIn</a></li>
                            <li><a href="https://www.facebook.com/" className="icon-facebook">Facebook</a></li>
                            
                            <li><a href="https://github.com" className="icon-github">GitHub</a></li>
                            <li><a href="https://pinterest.com" className="icon-pinterest">Pinterest</a></li>
                            <li><a href="https://instagram.com" className="icon-instagram">Instagram</a></li>
                            
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
