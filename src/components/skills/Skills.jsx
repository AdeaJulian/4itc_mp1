import React from 'react'
import "./skills.css";
import JAVA from "../../img/java.png";
import SKILLS from "../../img/skills.png";
import SOC from "../../img/soc.png";
import REACT from "../../img/react.png";
import CCS from "../../img/css.png";
import PYT from "../../img/pyt.png";


const Skills = () => {
    return (
        <div className="a">
          <div className="a-left">
            <div className="a-card">
              <img
                src={SKILLS}
                alt=""
                className="a-img"
              />
            </div>
          </div>
          <div className="a-right">
            <h1 className="a-title">Skills</h1>

            <div className="a-school">
              <img src={JAVA} alt="" className="a-school-img" />
              <div className="a-school-texts">
                <h4 className="a-school-title">Knowledgable in Java Programming Language</h4>
              </div>
            </div>

            <div className="a-school">
              <img src={REACT} alt="" className="a-school-img" />
              <div className="a-school-texts">
                <h4 className="a-school-title">Knowledgable in ReactJS</h4>
              </div>
            </div>

            <div className="a-school">
              <img src={CCS} alt="" className="a-school-img" />
              <div className="a-school-texts">
                <h4 className="a-school-title">Proficient in HTML/CSS</h4>
              </div>
            </div>

            <div className="a-school">
              <img src={PYT} alt="" className="a-school-img" />
              <div className="a-school-texts">
                <h4 className="a-school-title">Knowledgable in Python programming language</h4>
              </div>
            </div>

          </div>
        </div>
      );
}

export default Skills;