import "./Projects.css";
import project1 from "/images/project1.png";
import project2 from "/images/project2.png";
import project3 from "/images/project3.png";
import project4 from "/images/project4.png";
import link from "/images/link_white.svg";
import { motion } from "motion/react";
import { fadeIn } from "../../variants";
const Projects = () => {
  return (
    <>
      <section id="projects">
        <motion.div
          variants={fadeIn("down", 0.05)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="vertical-wrapper"
        >
          <p>Browse my recent</p>
          <h1>Works and Highlights</h1>
        </motion.div>
        <div className="projects-card">
          <motion.div
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="pcard"
          >
            <img src={project1} />
            <div className="p-info">
              <h2>Bhagavad Gita</h2>
              <p>E-Gita Website using Gita API.</p>
              <button>
                <a href="https://e-gita.onrender.com/">
                  <img src={link} className="link" />
                </a>
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="pcard"
          >
            <img src={project2} />
            <div className="p-info">
              <h2>Movie WatchList</h2>
              <p>Movie WatchList CLI Based Application.</p>
              <button>
                <a href="https://github.com/pavanteja18/Movies-WatchList-DS">
                  <img src={link} className="link" />
                </a>
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="pcard"
          >
            <img src={project3} />
            <div className="p-info">
              <h2>Grammiffy</h2>
              <p>A React based - Grammar Corrector.</p>
              <button>
                <a href="https://grammiffy.netlify.app/">
                  <img src={link} className="link" />
                </a>
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="pcard"
          >
            <img src={project4} />
            <div className="p-info">
              <h2>News Today</h2>
              <p>Get Latest News on the go.</p>
              <button>
                <a href="https://github.com/pavanteja18/News-feed-website-api">
                  <img src={link} className="link" />
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
