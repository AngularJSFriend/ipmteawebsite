import React, {useState} from 'react'
import reasonsApi from './API/threeReasons'

const FifthComp = () => {

    const [threeReason, setThreeReason] = useState(reasonsApi);

    return (
        <>
            <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">Why are real time simulations at the center stage of I-PMTEA ?</h3>
              <h1 className="main-heading">
              Three compelling reasons to use <br />simulation programs in I-PMTEA
              </h1>

              {threeReason.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              {/* <br />
              <button className="btn-style btn-style-border">learn more</button> */}
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./images/callcenter.jpg" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>





        </>
    )
}

export default FifthComp
