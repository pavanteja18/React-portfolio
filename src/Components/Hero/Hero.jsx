import "./Hero.css";
import "./index";
import pfp from "/images/profile-pic.png";
import Typewriter from "typewriter-effect";
import linkedin from "/images/linkedin.svg";
import github from "/images/github.png";
import Resume from "/images/Resume.pdf";
import { motion } from "motion/react";
import { fadeIn } from "../../variants";

const Hero = () => {
  return (
    <>
      <section id="root">
        <div className="root-container">
          <motion.img
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            src={pfp}
            alt="Pavan Teja picture"
            className="pfp"
          />

          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="info"
          >
            <p>Hello there, I&apos;m</p>
            <h1>M.Pavan Teja</h1>
            <div className="console-container">
              <p> and I&apos;m a </p>
              <span id="text">
                <Typewriter
                  options={{
                    strings: [
                      "Front-End Developer",
                      "UI/UX Designer",
                      "Full-Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>{" "}
            </div>
            <div className="btn-container">
              <button className="btn01">
                <a href={Resume}>Download CV</a>
              </button>
              <button className="btn02">
                <a href="#contact">Contact</a>
              </button>
            </div>
            <div className="social-container">
              <a
                href="https://www.linkedin.com/in/pavanteja18/"
                target="_blank"
              >
                <img src={linkedin} alt="Linked-in profile" />
              </a>
              <a href="https://github.com/pavanteja18" target="_blank">
                <img src={github} alt="Github profile" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
