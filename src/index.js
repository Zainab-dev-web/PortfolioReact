import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "jquery/dist/jquery.js"
import "popper.js/dist/popper.js"
import "bootstrap/dist/js/bootstrap.js"
import '../src/sass/style.sass'
import "./css/App.css"


// body{
//     font-family: "Montserrat", "Helvetica", Arial, sans-serif;
//   }
//   .navbar-brand{
//     font-size:35px !important;
//   }
//   .img_fond{
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-attachment: fixed;
//     width: 100vw;
//   }
//   .img_fond:hover #deux{display:block}
  
//   .navbartt{
//     margin-top: 25px;
//     z-index: 1;
//     position: absolute;
//     top: 0;
//     color: white ;
  
  
//   }
//   .nav-link{
//     color: rgba(255, 255, 255, 0.9) !important;
//     justify-content: space-between;
    
  
    
//   }
  
//   #deux{
//     display:none;
//     background-color:white;
//     opacity:0.5;
//     z-index: 1;
//     position: absolute;
//     top: 50px;
//   }
  
//   .collapse{
//     font-size: 15px;
//   }
//   .nav-link:hover{
//     color: rgba(255, 255, 255, 0.5) !important
//   }
//   .btn{
//     border-radius: 20px !important;
//   }
//   .span1{
//     font-size: 20px
//   }
//   .btn1{
//     border: rgb(2, 1, 1) 1px solid
//   }
//   .btn1:hover{
//     background-color:  rgb(23, 162, 184);
//   }
//   .presentation{
//     font-size:18px;
//     color: rgba(255, 255, 255, 0.5) !important
//   }
//   a{
//     text-decoration: none;
//     list-style: none;
//     color:#ffffff !important
//   }
//   /* pour le theme clair */
//   /* .imgAbout{
//     -webkit-box-shadow: 0px 0px 15px 8px rgba(255, 255, 255, 0.77);
//     -moz-box-shadow: 0px 0px 15px 8px rgba(0,0,0,0.77);
//     box-shadow: 0px 0px 15px 8px rgba(0,0,0,0.77);
    
//   } */
//   /* pour le theme foncé: */
//   .imgAbout{
//     -webkit-box-shadow: 0px 0px 15px 1px #ffffff;
//     -moz-box-shadow: 0px 0px 15px 1px #ffffff;
//     box-shadow: 0px 0px 15px 1px #ffffff;
    
//   }
  
  
//   /* mes skills */
  
ReactDOM.render(<App />, document.getElementById('root'));

