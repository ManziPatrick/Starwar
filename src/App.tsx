import React, { useState, useEffect } from "react";
import Footerbar from "./componet/Footer";
import Room from "./assets/Room.png"
import Navbar from "./componet/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel"; 
import './App.css';
function App() {
  const [showRecentlyViewed, setShowRecentlyViewed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowRecentlyViewed(true);
    }, 3000);
  }, []);

  return (
    <>
      <Navbar />

      <div className="card">
        <div className="texts">
          <h1>Meet</h1>
          <p>Your favorite Starwars characters</p>
        </div>
        <div className='image'>
        
          <img src={Room} alt="Image" />
          
         
        </div>
      </div>
      {showRecentlyViewed && (
        <div className="middle">
          <h1>recently viewed</h1>

    
          <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
           
            <div className="carousel-group">
              <div className="imagecards">
                <img src={Room} alt="Image" />
                <p>view</p>
              </div>
              <div className="imagecards">
                <img src={Room} alt="Image" />
                <p>view</p>
              </div>
              <div className="imagecards">
                <img src={Room} alt="Image" />
                <p>view</p>
              </div>
            </div>

           
            <div className="carousel-group">
              <div className="imagecards">
                <img src={Room} alt="Image" />
                <p>view</p>
              </div>
              <div className="imagecards">
                <img src={Room} alt="Image" />
                <p>view</p>
              </div>
              <div className="imagecards">
                <img src={Room} alt="Image" />
                <p>view</p>
              </div>
            </div>

           
            <div className="carousel-group">
              <div className="imagecards">
                <img src={Room} alt="Image" />
                <p>view</p>
              </div>
              <div className="imagecards">
                <img src={Room} alt="Image" />
                <p>view</p>
              </div>
              <div className="imagecards">
                <img src={Room} alt="Image" />
                <p>view</p>
              </div>
            </div>
          </Carousel>

          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      )}
      <div className="footer">
        <Footerbar />
      </div>
    </>
  );
}

export default App;