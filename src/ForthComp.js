import React, {useState} from 'react'
import winnerApi from './API/winner';

const ForthComp = () => {

    const [winnerData, setwinnerData] = useState(winnerApi);
    console.log(winnerData);
   
    return (
        <>
            <div className="forthCompbg">
 <section>
 <div className="forth-container container">
 <h1 className="main-heading text-center">Winners of the International PMTEA 2020 Virtual Competition</h1>
 <div className="row">
 {winnerData.map((curElem) => {
     const {id, logo, title, info} = curElem;
 
     return(
         <>
 <div className= "col-12 col-lg-4 text-center work-container-subdiv">
 <i><img src={logo} alt="trophy" /></i>
 <h2 className="sub-heading">{title}</h2>
 <p className="main-hero-para w-100">{info}</p>
 
         </div>
         </>
     );
 })}
 
 </div>
 </div>
 </section>
 </div> 
         </>
     );
}

export default ForthComp
