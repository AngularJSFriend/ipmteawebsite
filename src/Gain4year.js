import React, { useState } from 'react';
import programDetails from './API/programDetails';

const Gain4year = () => {

    const [progData, setProgData] = useState(programDetails)


    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="./images/hero3.jpg" alt="aboutusIMg" />
                        </div>
                        {/* 1section right side data  */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                Gain 4 years of real experience through I-PMTEA 2021
                            </h3>
                            <h1 className="main-heading">International Project Management Olympiad</h1>
                            {
                                progData.map((curElem) => {
                                    const { id, title, info } = curElem;

                                    return (<>
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para"> {info}</p>

                                            </div>
                                        </div>

                                    </>
                                    );
                                })}                        
                        <br />
                        <button className="btn-style1 btn-style-border">Program Details</button>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Gain4year
