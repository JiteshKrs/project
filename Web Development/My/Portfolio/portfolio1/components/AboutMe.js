import Img from "next/image";
import abt from ".//../public/images/about-me/about.png";

import aboutmeStyles from "../styles/AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div id="about" className={aboutmeStyles.container}>
      <h1>About Me</h1>
      <section className={aboutmeStyles.aboutContainer}>
        <span className={aboutmeStyles.imgContainer}>
          <Img
            src{...abt}
            alt="About me"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </span>
        <div className={aboutmeStyles.marginContent}>
        <span className={aboutmeStyles.Content}>
          Hello! I’m Jitesh Kumar, a web developer. I love to work on exciting
          projects which test what I have learned. I’m always looking for
          challenging problems, team collaboration, and the best ways to tackle
          problems. Eager about grabbing onto any other programming language or
          framework.
          <div>
            I’m currently looking for an opportunity to show my potential.
          </div>
        </span>
        <span className={aboutmeStyles.btnSpace}>
          <button className={aboutmeStyles.btn}><a href="https://drive.google.com/file/d/1dHJvKan_mz9wAHkXKCoCXvuX52_V9ISM/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></button>
          {/* <button className={aboutmeStyles.btn}>Hire Me</button> */}
        </span>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
