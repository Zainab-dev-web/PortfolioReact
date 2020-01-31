import React, { Fragment, useEffect, useState } from 'react';



const Service_1 = () => {

    const [pro, setPro] = useState("row no-gutters mx-auto w-75 my-5 d-flex")
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >540 ) {
                console.log(window.scrollY)
                setPro('row no-gutters mx-auto w-75 my-5 d-flex animated fadeInUp ')
            } else {
                setPro("row no-gutters mx-auto w-75 my-5 d-flex  ")
            }
        })
    })
    

    return (
        <Fragment>
            <section className="sect-service bg-white "id="service">
                <h1 className="text-center my-4" >Nos services</h1>
                <div className="text-center my-5">
                    <span className=" span1 text-secondary ">
                        Vous souhaitez refondre l’Identité numérique de votre entreprise et notamment votre site internet
                    </span>
                    
                    <div className="text-center my-4">
                        <button className=" btncolor btn btn-secondary text-uppercase text-center  px-4 "><strong>Voir détail</strong></button></div>

                </div>
                <div className={pro}>
                    <div className="col-12 col-sm-6 col-md-3 text-center align-item-center">
                        <div className="colB py-3 my-1">
                            <div className="my-4">
                                <i className="fas fa-atom fa-4x"></i>
                            </div><br />
                            <h4>Technique </h4><button className="btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3  text-center align-item-center">
                        <div className="colB py-3 my-1 ">
                        <div className="my-4">
                            <i className="fas fa-palette fa-4x"></i>
                        </div><br />
                        <h4>Visual Design</h4><button className="btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3  text-center align-item-center">
                        <div className="colB py-3 my-1">
                        <div className="my-4">
                            <i className="fas fa-mobile-alt fa-4x"></i>
                        </div><br />
                        <h4>Responsive</h4><button className="btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3  text-center align-item-center">
                        <div className="colB py-3 my-1">
                        <div className="my-4">
                            <i className="fas fa-shopping-bag fa-4x"></i></div>
                        <br />
                        <h4>E-Commerce</h4><button className=" btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>

    );
}

export default Service_1;
