import React from 'react';
import './css/style.css';



const AboutComp = () => {
    return (
        <>
            <section id="home-sec">
                <div class="overlay text-center">
                    <h1 >About International - Project Management Team Excellence Award</h1><br />
                    <hr class="hr-set" />

                    <p>CEPM is organizing the Second International Project Management Team Excellence Award (I-PMTEA) </p>
                </div>

            </section>

            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12" >
                        <div class="overlay text-center">
                            <h3><strong>CEPM is organizing the Second International Project Management Team Excellence Award (I-PMTEA). The first of its
                                kind, Int’l PMTEA will be held in a virtual environment. The team members can be dispersed at different locations and
                                can use their local time to participate.</strong></h3>
</div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-12 p-top-row " >
                        <div class="overlay text-center">
                            <img
                                src="./images/about1.jpg"
                                alt="About IPMTEA"
                                className="img-fluid" />
                            <p> </p>
                            <img
                                src="./images/about2.jpg"
                                alt="About IPMTEA"
                                className="img-fluid" />
                        </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutComp
