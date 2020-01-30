import React, { Fragment, useState } from 'react';
import imgContact from "../img/contact2.jpg"

const Contact_5 = () => {

  const [contact, setContact] =useState(false)

  

  const handleClick2 = () => {

      setContact(true)
  }


  return (
    <section className="sectContact py-5">
      <div className="container contenu-contact text-center p-5 mx-auto w-50 bg-light ">
        <div className="row">
          <div className="col-xs-12 col-lg-8 offset-lg-2">
            <h2 className="text-uppercase" id="contact">Contact</h2>

            <hr />
            <p><br />
              <i className="fas fa-phone-volume"></i>+32 48* *** ***</p>
            <p><br /><i className="fas fa-envelope"></i>*********@gmail.com</p>

            <form>
              <div className="row no-gutters">
                <div className="col-12 col-sm-6 col-md-6">
                  <input type="text" className="form-control" placeholder="Nom" />
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                  <input type="email" className="form-control" placeholder="nom@exemple.com" />
                </div>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea className="form-control" placeholder="Message" id="exampleFormControlTextarea1"
                  rows="3"></textarea>
              </div>
            </form>
            <button className=" btncontact btn btn-dark text-uppercase text-center" onClick={handleClick2} >Envoyer un message</button>

            {contact === true ? <div className="alert alert-success alert-dismissible fade show " role="alert" >
              <strong>Merci à vous! </strong>Nous allons vous contacter prochainement .
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div> : ""}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact_5;