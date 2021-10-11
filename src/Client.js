import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from './Item';




const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const Client = () => {
    return (
        <>
            
            <h1 style={{ textAlign: "center" }}>249 Participants in 57 Teams from 25 Companies in International PMTEA in 2018, 2019 & 2020</h1>
      <div className="App1">
        <Carousel breakPoints={breakPoints}>
          <Item><img src={"./images/ntpc1.jpg"} alt="NTPC Logo" /></Item>
          <Item><img src={"./images/ncl2.jpg"} alt="NCL Logo" /></Item>
          <Item><img src={"./images/indianOil3.jpg"} alt="Indian Oil Logo" /></Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
       
 
        </>
    )
}

export default Client
