import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";

const AboutCard = () => {


  console.log("HomeAbout ", homeAbout[0].cover);
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about1.jpg" alt="" />
          </div>
          <div className="right row">
            <Heading
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning Expertise"
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="No images" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  );
};

export default AboutCard;
