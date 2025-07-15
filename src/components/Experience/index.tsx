import { Col, Row } from "react-bootstrap";
import { experience } from "../../data";
import SkillBadge from "../shared-components/skill-badge";
import styles from "./index.module.css";
const Experience = () => {
  return (
    <>
      <h4>Experience</h4>
      {experience.map((exp, index) => (
        <Row className={`${styles.experience} mb-4`} key={index}>
          <Col xs={12} lg={4}>
            <p className={styles.duration}>{exp.duration}</p>
          </Col>
          <Col xs={12} lg={8}>
            <p>
              {exp.position} . {exp.company}
            </p>

            {exp.description.map((description, idx) => (
              <p className={styles.description} key={idx}>
                {description}
              </p>
            ))}
            <div className="d-flex gap-2 flex-wrap">
              {exp.skills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Experience;
