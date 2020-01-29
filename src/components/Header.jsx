import React, { Fragment, useEffect, useState } from 'react';
import imgHeader from "../img/ZAÏDEV.png"




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
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse  justify-content-center" id="navbarSupportedContent  ">
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

                        <button className="btn btn-info my-2 my-sm-0  px-4" type="submit" data-toggle="modal" data-target="#exampleModal" ><strong>Devis Gratuit</strong></button>











{/* modal exemple kadir */}

                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Formulaire de contact</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-6">
                                                <input style={{ margin: 5 + 'px', borderRadius: 20 + 'px', height: 35 + 'px' }} className="form" type="text" placeholder="Nom" />
                                                <input style={{ margin: 5 + 'px', borderRadius: 20 + 'px', height: 35 + 'px' }} className="form" type="text" placeholder="Email" />
                                            </div>
                                            <div className="col-6">
                                                <input style={{ margin: 5 + 'px', borderRadius: 20 + 'px', height: 35 + 'px' }} className="form" type="text" placeholder="Prénom" />
                                                <select id="inputState" className="form-control" style={{ margin: 5 + 'px', backgroundColor: 'rgb(0, 0, 0, 0.05)', borderRadius: 20 + 'px', height: 35 + 'px' }}>
                                                    <option selected>Choisir le sujet...</option>
                                                    <option>Bug</option>
                                                    <option>Idée</option>
                                                    <option>Amélioration</option>
                                                    <option>Contact</option>
                                                </select>
                                            </div>
                                        </div>
                                        <textarea style={{ height: 100 + 'px', margin: 10 + 'px' }} className="form" name="" id="" cols="30" rows="10" placeholder="Tapez votre message ici..."></textarea>
                                        
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
