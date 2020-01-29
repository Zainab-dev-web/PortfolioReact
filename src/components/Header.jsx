import React, { Fragment, useEffect, useState } from 'react';
import imgHeader from "../img/Zaidev.png"




const Header = () => {

    // const [modal, setModal] = useState(false)


    const [nav, setNav] = useState('navbartt d-flex position-absolute w-100 navbar navbar-expand-lg navbar-dark');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 450) {
                setNav('navbartt d-flex position-absolute w-100 navbar navbar-expand-lg navbar-dark position-fixed navfixed m-0')
            } else {
                setNav('navbartt d-flex position-absolute w-100 navbar navbar-expand-lg navbar-dark')
            }
        });
    });



    // const handleClick = () => {

    //     setModal(true)
    // }


    return (
        <Fragment>

            <header className="header" id="home">
                <img className="img_fond" src={imgHeader} alt="" />


                <nav className={nav}>
                    <a className="navbar-brand mx-5" href="#home">Zaï<strong className="text-info">Dev</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#monMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse  justify-content-center" id="monMenu">
                        <ul className="navbar-nav mx-auto text-white " >

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
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-facebook-square fa-1x"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-instagram fa-1x"></i></a>
                            </li>
                        </ul>

                        {/* <form className="form-inline my-2 my-lg-0 ml-5">/ */}

                        <button className="btn btn-info my-2 my-sm-0  px-4" type="submit" data-toggle="modal" data-target="#devis" >
                            <strong>Devis Gratuit</strong>
                        </button>
                        <div className="modal fade" id="devis" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">

                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Demande de devis</h5> <hr />
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        
                                        <h4 className="text-dark">Demande de devis</h4>
                                        <hr/>
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail4">Nom</label>
                                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Nom" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="inputPassword4">Prénom</label>
                                                    <input type="text" class="form-control" id="inputPassword4" placeholder="Prénom" />
                                                </div>
                                            </div>

                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail4">Email</label>
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="inputPassword4">Password</label>
                                                    <input type="text" class="form-control" id="inputPassword4" placeholder="Prestation désiré" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label class="form-check-label" for="gridCheck">
                                                        Check me out
      </label>
                                                </div>
                                            </div>

                                        </form>






                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                                        <button type="button" class="btn btn-primary">Envoyer</button>
                                    </div>
                                </div>
                            </div>




                        </div>




                    </div>
                </nav>
                {/* <div className="nomportfolio d-flex position-absolute w-100 text-center ">
                
                    <h1 className="nomPortfolio">Zaï<strong>Dev</strong></h1>
                    <br/>
                    <div className="spanheader d-flex position-absolute w-100 text-center ">
                    <p className="spanHeader">Imagine , Reflechis et Dévellope...</p>
                    </div>
                </div> */}
                <a href="#home"><button className="p-3 btnhaut btn btn-info mb-3"><i class="fas fa-arrow-up text-white"></i></button></a>
            </header>
        </Fragment>

    );
}

export default Header;
