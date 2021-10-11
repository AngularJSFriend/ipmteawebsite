import React from 'react';
import Navbar from '../navbar';
import Footer from '../Footer';

const PointTable = () => {
    return (
        <>
        <Navbar />
        <section id="home-sec">
                <div class="overlay text-center">
                    <h1>2020 Score & Rankings</h1><br />
                    <hr class="hr-set" />

                    <p>I-PMTEA SUMMARY </p>
                </div>

            </section>

            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12" >
                        <div class="overlay text-center">
                            <h3><strong>The most robust process to win the International Project Management Team Excellence Award</strong></h3>
</div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-12 p-top-row " >
                        <div class="overlay text-center">
                            <img
                                src="./images/pointtable.jpg"
                                alt="Point Table"
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

export default PointTable
