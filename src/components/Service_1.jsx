import React, { Fragment } from 'react';



const Service_1 = () => {




    return (
        <Fragment>
            <h1 className="text-center my-4" id="service">Nos services</h1>
            <div className="text-center my-5">
                <span className=" span1 text-secondary ">
                    Vous souhaitez refondre l’Identité numérique de votre entreprise et notamment votre site internet ?
        </span>
                <div className="text-center my-4">
                    <button className=" btncolor btn btn-secondary text-uppercase text-center  px-4 "><strong>Voir détail</strong></button></div>

            </div>
            <div className="row no-gutters mx-auto w-100 my-5 d-flex">
                <div className="col text-center align-item-center">
                    <div className="my-4">
                        <i class="fas fa-atom fa-4x"></i>
                    </div><br />
                    <h4>Technique </h4><button className="btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                </div>
                <div className="col text-center align-item-center">
                    <div className="my-4">
                        <i class="fas fa-palette fa-4x"></i>
                    </div><br />
                    <h4>Visual Design</h4><button className="btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                </div>
                <div className="col text-center align-item-center">
                    <div className="my-4">
                        <i class="fas fa-mobile-alt fa-4x"></i>
                    </div><br />
                    <h4>Responsive</h4><button className="btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                </div>
                <div className="col text-center align-item-center">
                    <div className="my-4">
                        <i class="fas fa-shopping-bag fa-4x"></i></div>
                    <br />
                    <h4>E-Commerce</h4><button className=" btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                </div>
            </div>

        </Fragment>

    );
}

export default Service_1;
