import React, { Fragment } from 'react';
import imgContact from "../img/contact2.jpg"

const Contact_5 = () => {


  return (
    <section className="sectContact py-5">
      <div className="contenu-contact text-center p-5 mx-auto bg-light ">
        <h2 className="text-uppercase" id="contact">Contact</h2>
        <hr />
        <p><br />
          <i className="fas fa-phone-volume"></i>+32 48* *** ***</p>
        <p><br /><i className="fas fa-envelope"></i>*********@gmail.com</p>

        <form>
          <div className="row no-gutters">
            <div className="col">
              <input type="text" className="form-control" placeholder="Nom" />
            </div>
            <div className="col">
              <input type="email" className="form-control" placeholder="nom@exemple.com" />
            </div>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1" ></label>
            <textarea className="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
        <button className=" btncontact btn btn-dark text-uppercase text-center" type="submit" data-toggle="modal" data-target="#contact"
       >Envoyer un message</button>

       


<div className="modal fade" id="contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
        
      </div>
    </div>
  </div>
</div>


      </div>



    </section>

  );
}

export default Contact_5;
