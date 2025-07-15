import { Col, Row } from "react-bootstrap";
import { projects } from "../../data";
import styles from "./index.module.css";
import { bedrock, formpanda, selfstorage } from "../../assets";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const images = {
    bedrock: bedrock,
    formpanda: formpanda,
    selfstorage: selfstorage,
  };
  return (
    <>
      <h4>Projects</h4>
      {projects.map((project, index) => {
        return (
          <Row key={index}>
            <Col xs={12} lg={4} className="d-flex  align-items-center">
              <h6 key={index}>{project.title}</h6>
            </Col>
            <Col xs={12} lg={8}>
              <div key={index} className={styles.project}>
                <img src={images[project.image as keyof typeof images]} />
                <p className={styles.description}>{project.description}</p>
                <a
                  className={styles.liveURL}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt color="black" />
                </a>
              </div>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default Projects;
