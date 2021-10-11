import React from 'react'

const Header = () => {
    return (
        <>
         <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
              International - Project Management Team Excellence Award I - PMTEA-2021 (Virtual Competition)
              </h1>
              <p className="main-hero-para">
              16-17 November 2021
18 November from 4:30 to 5:00 pm (GMT +5.30 Hrs.) - Declaration of Winning Teams
Participate...show your mettle...
Be the International PMTEA 2021 winning team
              </p>
              {/* <h3>Get more information </h3> */}
              <div className="input-group mt-1">
                {/* <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email" 
                />*/}
                <div className="input-group-button">Download Brochure</div>
                </div>
                
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/hero1.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./images/hero4.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
        </>
    )
}

export default Header
