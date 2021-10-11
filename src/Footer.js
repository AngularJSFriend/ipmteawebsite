import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>

<footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-4">
                  <h2><figure>
                    <img
                      src="./images/cepmlogo.jpg"
                      height="100"
                      width="200"
                      alt="CEPM Logo"
                      className="img-fluid"
                   
                    />
                      </figure>   Centre for Excellence in Project Management Pvt. Ltd. </h2>
                  <ul>
                    <li>
                    <li>
                   <p></p>
                    </li>
                   <li>Address</li>
                    <h2> Ruchira Jain</h2> (First Certified Senior Project Manager from India) <br />
                <h2> Managing Director</h2>
                  Centre for Excellence in Project Management (P) Ltd. (CEPM)<br />
                  Cell : +91 9999684622 | Office Cell : +91 9999684621 <br /> 
                  Email: rjain@cepm.com | Web: www.cepm.com
               
                    </li>
                  
                   
                    <li>
                      <a href="#"></a>
                    </li>
                    
                  </ul>
                </div>

                <div className="col-6 col-lg-4">
                <div class="overlay text-center">
                  <h2 > in association with</h2>
                  </div>
                  <ul>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                  </ul>
                </div>

                

                <div className="col-6 col-lg-4">
                  <h2> <figure>
                    <img
                      src="./images/i2p2mlogo.jpg"
                      height="200"
                      width="300"
                      alt="CEPM Logo"
                      className="img-fluid"
                   
                    />
                      </figure>  International Institute of Projects and Program Management (i2P2M)  </h2>
                      
                      <ul>
                      <li>
                      <p>&nbsp;</p>
                    </li>
                    <li class="nav-item">
                      <NavLink class="nav-link" to="/Privacypolicy">
                      Privacy policy
                    </NavLink>

                    </li>
                    <li>
                      <a href="#">Refund policy</a>
                    </li>
                    <li>
                      <a href="#">Terms and conditions</a>
                    </li>
                    
                  </ul>






                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/"
                        target="_thapa">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 CEPM. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
            
        </>
    )
}

export default Footer
