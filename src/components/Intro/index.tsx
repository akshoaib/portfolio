import styles from "./index.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Intro = () => {
  return (
    <div className="intro position-sticky top-0">
      <h1 className={styles.name}>Muhammad Shoaib Akhtar</h1>
      <p className={styles.jobTitle}>Frontend Developer</p>
      <p>
        Web Developer Building User-Centered Interfaces and Scalable Web
        Solutions
      </p>
      <p>
        I’m a 3+ years experienced developer passionate about crafting
        accessible, pixel-perfect user interfaces that blend thoughtful design
        with robust engineering. My favorite work lies at the intersection of
        design and development, creating experiences that not only look great
        but are meticulously built for performance and usability.
      </p>
      <div className="d-flex gap-3">
        <a
          href="http://www.linkedin.com/in/m-shoaib-"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/akshoaib"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaGithub size={20} />
        </a>
        <a href="mailto:akhtarshoaib317@gmail.com" className={styles.icon}>
          <MdOutlineEmail size={20} />
        </a>
      </div>
    </div>
  );
};
export default Intro;
