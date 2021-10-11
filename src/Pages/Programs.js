import React from 'react'
import Navbar from '../navbar';
import Footer from '../Footer';

const Programs = () => {
    return (
        <>
            <Navbar />
            <section id="home-sec">
        <div class="overlay text-center">
            <h1 >Programs - 16 -17 November 2021</h1><br />
            <hr class="hr-set"/>

            <p>Day 1- Managing Stakeholders  ||  Day 2- Project Leadership </p>
        </div>
    </section>

    <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12" >
                        <div class="overlay text-center">
                            <h3><strong>Competition timing is from 9.30 am to 4 pm based on the local time zone
selected by participating teams. Participants gain 3 Years of experience</strong></h3>
</div>

                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-12 p-top-row " >
                        <div class="overlay text-center">
                            <img
                                src="./images/prog1.jpg"
                                alt="Program Day 1 IPMTEA"
                                className="img-fluid" />
                            <p> </p>
                            <img
                                src="./images/prog2.jpg"
                                alt="Program Day 2 IPMTEA"
                                className="img-fluid" />
                                </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </>
    )
}

export default Programs
