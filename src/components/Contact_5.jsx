import React, { Fragment } from 'react';
import imgContact from "../img/contact2.jpg"

const Contact_5 = () => {


  return (
    <section className="sectContact py-5">
      <div className="contenu-contact text-center p-5 mx-auto bg-light ">
        <h2 className="text-uppercase" id="contact">Contact</h2>
        <hr />
        <p><br />
          <i class="fas fa-phone-volume"></i>+32 48* *** ***</p>
        <p><br /><i class="fas fa-envelope"></i>*********@gmail.com</p>

        <form>
          <div class="row no-gutters">
            <div class="col">
              <input type="text" class="form-control" placeholder="Nom" />
            </div>
            <div class="col">
              <input type="email" class="form-control" placeholder="nom@exemple.com" />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1" ></label>
            <textarea class="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
        <button className=" btncontact btn btn-dark text-uppercase text-center">Envoyer un message</button>
      </div>

    </section>

  );
}

export default Contact_5;
