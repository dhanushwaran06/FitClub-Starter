import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = ({onRouterChange}) => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="Hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
            <div className="text_sec">
              <span>
                In here we will help you to shape and build your ideal body and
                live up your life to fullest
              </span>
            </div>
          </div>
        </div>
        <div className="figure">
          <div>
            <span>+60</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+700</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">
          <Link to={'/Join'} >Join Now</Link></button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>114 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem"}}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
