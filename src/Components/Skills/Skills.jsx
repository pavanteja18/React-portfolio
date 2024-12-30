import { motion } from "motion/react";
import { fadeIn } from "../../variants";
import "./Skills.css";
import mongo from "/images/mongodb.svg";
import figma from "/images/figma.svg";
import python from "/images/python.svg";
import html from "/images/html.svg";
import css from "/images/css3.svg";
import postgresql from "/images/postgresql.svg";
import expressjs from "/images/expressjs.svg";
import js from "/images/javascript.svg";
import react from "/images/react.svg";
import tailwind from "/images/tailwindcss.svg";
const Skills = () => {
  return (
    <>
      <section id="skills">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="vertical-wrapper"
        >
          <p>Here are my</p>
          <h1>Logs and Experiences</h1>
        </motion.div>
        <div className="Skills-card">
          <motion.div
            className="scard"
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={html} />
            <div className="s-info">
              <h2>HTML</h2>
              <p>
                Markup Language - <span>Experienced</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="scard"
            variants={fadeIn("right", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={css} />
            <div className="s-info">
              <h2>CSS</h2>
              <p>
                Styling Language - <span>Experienced</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="scard"
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={js} />
            <div className="s-info">
              <h2>JavaScript</h2>
              <p>
                Programming Language - <span>Intermediate</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="scard"
            variants={fadeIn("right", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={python} />
            <div className="s-info">
              <h2>Python</h2>
              <p>
                Programming Language - <span>Intermediate</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="scard"
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={expressjs} />
            <div className="s-info">
              <h2>Express</h2>
              <p>
                Node.JS Framework - <span>Intermediate</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="scard"
            variants={fadeIn("right", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={react} />
            <div className="s-info">
              <h2>React.JS</h2>
              <p>
                FrontEnd Library - <span>Intermediate</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="scard"
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={tailwind} />
            <div className="s-info">
              <h2>TailWind CSS</h2>
              <p>
                CSS Framework - <span>Intermediate</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="scard"
            variants={fadeIn("right", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={postgresql} />
            <div className="s-info">
              <h2>PostGre SQL</h2>
              <p>
                Database - <span>Basic</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="scard"
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={mongo} />
            <div className="s-info">
              <h2>Mongo DB</h2>
              <p>
                Database - <span>Basic</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="scard"
            variants={fadeIn("right", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={figma} />
            <div className="s-info">
              <h2>Figma</h2>
              <p>
                Web Designing Tool - <span>Intermediate</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
