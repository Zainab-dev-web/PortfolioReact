import React, { Fragment } from 'react';



const Service_1 = () => {


    // var textWrapper = document.querySelector('.ml11 .letters');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span className='letter'>$&</span>");
    
    // anime.timeline({loop: true})
    //   .add({
    //     targets: '.ml11 .line',
    //     scaleY: [0,1],
    //     opacity: [0.5,1],
    //     easing: "easeOutExpo",
    //     duration: 700
    //   })
    //   .add({
    //     targets: '.ml11 .line',
    //     translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    //     easing: "easeOutExpo",
    //     duration: 700,
    //     delay: 100
    //   }).add({
    //     targets: '.ml11 .letter',
    //     opacity: [0,1],
    //     easing: "easeOutExpo",
    //     duration: 600,
    //     offset: '-=775',
    //     delay: (el, i) => 34 * (i+1)
    //   }).add({
    //     targets: '.ml11',
    //     opacity: 0,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000
    //   });

    return (
        <Fragment>
            <section className="bg-white py-5">
                <h1 className="text-center my-4" id="service">Nos services</h1>
                <div className="text-center my-5">
                    <span className=" span1 text-secondary ">
                        Vous souhaitez refondre l’Identité numérique de votre entreprise et notamment votre site internet
                    </span>
                    <h1 className="ml11">
                        <span className="text-wrapper">
                            <span className="line line1"></span>
                            <span className="letters">Hello Goodbye</span>
                        </span>
                    </h1>
                    <div className="text-center my-4">
                        <button className=" btncolor btn btn-secondary text-uppercase text-center  px-4 "><strong>Voir détail</strong></button></div>

                </div>
                <div className="row no-gutters mx-auto w-100 my-5 d-flex">
                    <div className="col text-center align-item-center">
                        <div className="my-4">
                            <i className="fas fa-atom fa-4x"></i>
                        </div><br />
                        <h4>Technique </h4><button className="btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                    </div>
                    <div className="col text-center align-item-center">
                        <div className="my-4">
                            <i className="fas fa-palette fa-4x"></i>
                        </div><br />
                        <h4>Visual Design</h4><button className="btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                    </div>
                    <div className="col text-center align-item-center">
                        <div className="my-4">
                            <i className="fas fa-mobile-alt fa-4x"></i>
                        </div><br />
                        <h4>Responsive</h4><button className="btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                    </div>
                    <div className="col text-center align-item-center">
                        <div className="my-4">
                            <i className="fas fa-shopping-bag fa-4x"></i></div>
                        <br />
                        <h4>E-Commerce</h4><button className=" btn btn-white text-dark px-4 btn1 my-3"><strong>Voir détail</strong></button>
                    </div>
                </div>
            </section>
        </Fragment>

    );
}

export default Service_1;
