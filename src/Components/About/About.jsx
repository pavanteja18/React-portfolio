import "./About.css";
import { motion } from "motion/react";
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <>
      <section id="about_me">
        <motion.h1
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          About me
        </motion.h1>
        <div className="card-container">
          <motion.div
            className="card"
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h3 className="date">20th may, 2025</h3>
            <h1>/ Malla Reddy Engineering College</h1>
            <p className="txt">
              / I am pursuing my Pre-graduate at Malla Reddy Engineering
              College, Hyderabad. I have secured a CGPA of 8.5.
            </p>
          </motion.div>

          <motion.div
            className="card"
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h3 className="date">20th may, 2021</h3>
            <h1> / Narayana Junior College</h1>
            <p>
              / My Intermediate Education was done at Narayana Junior College,
              Hyderabad under the Mathematics Stream. I was able to score
              academically a percentage of 91.8%.
            </p>
          </motion.div>

          <motion.div
            className="card "
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h3 className="date">20th may, 2019</h3>
            <h1>/ Jeevadan High School</h1>
            <p>
              / I have completed my schooling from Jeevadan High School,
              Kamareddy. I have secured a score of 9.7 CGPA out of 10.{" "}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
