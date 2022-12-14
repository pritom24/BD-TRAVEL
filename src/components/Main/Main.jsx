import React, { useEffect } from "react";
import "./main.css";
import Card from "./Card";
import Data from "../../Data/Data";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="main container section">
        {/* <Card /> */}
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Featured Experiences
          </h3>
        </div>
        <div className="secContent grid">
          {Data.map(
            ({ id, img, desTitle, location, grads, price, description }) => {
              return (
                <div data-aos="fade-up" key={id} className="singleDestination">
                  <div className="imageDiv">
                    <img src={img} alt="" />
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{desTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>
                          {grads}
                          <small>+1</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{price}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <Link to="/hotel"><p>{description}</p></Link>
                      
                    </div>
                    <Link to="/hotel">
                      <button className="btn flex">
                        DETAILS <HiOutlineClipboardCheck className="icon" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default Main;
