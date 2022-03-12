import React from 'react'
import "./about.css";
import UST from "../../img/ust.jpg";
import AAM from "../../img/aam.jpg";
import GRAD from "../../img/grad.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img
            src={UST}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Education</h1>
        {/* <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p> */}
        <p className="a-desc">
          I studied at Ann Arbor Montessori where I finished my elementary and highschool education. I was accelerated to the
          2nd year highschool class when I passed an acceleration exam when I was in 6th grade and finished my junior and
          senior highschool there. I am currently on my last semester as a 4th year Information Technology student at the University of Santo Tomas.
        </p>
        <div className="a-school">
          <img src={UST} alt="" className="a-school-img" />
          <div className="a-school-texts">
            <h4 className="a-school-title">University of Santo Tomas</h4>
            <p className="a-school-desc">
              BS Information Technology 2018-2022
            </p>
          </div>
        </div>
        <div className="a-school">
          <img src={AAM} alt="" className="a-school-img" />
          <div className="a-school-texts">
            <h4 className="a-school-title">Ann Arbor Montessori</h4>
            <p className="a-school-desc">
              Senior High School 2016-2018
            </p>
            <p className="a-school-desc">
              Junior High School 2013-2016
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;