import { Col, Row } from "react-bootstrap";
import styles from "./layout.module.css";
import Intro from "../Intro";
import Experience from "../Experience";
import Projects from "../projects";
const Layout = () => {
  return (
    <Row className={`${styles.layout} pt-5 g-0 justify-content-around`}>
      <Col xs={12} lg={4} className={`${styles.main}`}>
        <Intro />
      </Col>
      <Col xs={12} lg={6} className={`${styles.main} `}>
        <Experience />
        <Projects />
      </Col>
    </Row>
  );
};
export default Layout;
