import "./Contact.css";
import linkedin from "/images/linkedin.svg";
import github from "/images/github.png";
import { motion } from "motion/react";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <motion.div
          variants={fadeIn("down", 0.05)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="vertical-wrapper"
        >
          <p>Get in Touch!</p>
          <h1>Contact me for Collaboration</h1>
        </motion.div>
        <div className="contact-container">
          <motion.div
            variants={fadeIn("left", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="social-links"
          >
            <a href="https://www.linkedin.com/in/pavanteja18/" target="_blank">
              <img src={linkedin} alt="linkedin_logo" />
              <h3>Linkedin</h3>
            </a>
            <a href="https://www.github.com/pavanteja18/" target="_blank">
              <img src={github} alt="linkedin_logo" />
              <h3>Github</h3>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.05)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="contact-form"
          >
            <form
              action="https://getform.io/f/bolldwxa"
              method="POST"
              className=""
            >
              <div className="input-card">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="input"
                  required
                  placeholder="Your Name..."
                />
              </div>
              <div className="input-card">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="input"
                  required
                  placeholder="yourmail@xxxx.com..."
                />
              </div>
              <div className="input-card">
                <label htmlFor="email" className="label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Hi!"
                  required
                  className="input"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
