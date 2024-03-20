

import React, { useEffect, useState } from "react";
import axios from "axios";
import StatsTable from "./StatsTable";
import StatsGraph from "./StatsGraph";
import ordersProcessed from "../../../../Resources/orders.png";
import OM from "../../../../Resources/om.png";
import graphics from "../../../../Resources/graphics.png"
// import RC from "../../../../Resources/rc.png";

function Stats() {
  const [stats, setStats] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://dull-pink-termite-slip.cyclic.app/dashboardData";
        const response = await axios.get(apiUrl);
        setStats(response.data);
      } catch (error) {
        console.error(error, "error fetching api data");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increase the current slide index
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 7000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const ordersImage = <img src={ordersProcessed} alt="rolling 5 day # of new orders" />;
  const omImage = <img src={OM} alt="daily order totals" />;
  const graphicsImage = <img src={graphics} alt="daily graphics totals" />;
  // const rcImage = <img src={RC} alt="production report card" />;

  const slides = [
  
    <StatsTable stats={stats} />,
    <StatsGraph stats={stats} />,
    graphicsImage,
    ordersImage,
    omImage,
    
    
  ];

  return (
    <div>
      {/* <StatsGraphs /> */}
      
      <div style={{ position: "relative", width: "100%", overflow: "scroll" }}>
      {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              display: index === currentSlide ? "block" : "none",
            }}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;

