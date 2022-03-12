import React from 'react'
import "./experience.css";
import SOC from "../../img/soc.png";
import AAM from "../../img/aam.jpg";
import EXP from "../../img/exp.png";
import TGR from "../../img/tgr.png";

const Experience = () => {
    return (
        <div className="a">
          <div className="a-left">
            <div className="a-card">
              <img
                src={EXP}
                alt=""
                className="a-img"
              />
            </div>
          </div>
          <div className="a-right">
            <h1 className="a-title">Experience</h1>
            <div className="a-school">
              <img src={TGR} alt="" className="a-school-img" />
              <div className="a-school-texts">
                <h4 className="a-school-title">MerchUSTe (capstone Project)</h4>
                <h4 className="a-school-title">June 2021 - December 2021</h4>
                <p className="a-school-desc">
                  Served as the frontend developer for the Tiger Apparel Website.
                </p>
              </div>
            </div>
            <div className="a-school">
              <img src={SOC} alt="" className="a-school-img" />
              <div className="a-school-texts">
                <h4 className="a-school-title">Sociov</h4>
                <h4 className="a-school-title">2022</h4>
                <p className="a-school-desc">
                  Served as a Web Developer for Sociov.
                </p>
                <p className="a-school-desc">
                  Junior High School 2013-2016
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Experience