import { skills } from "../../data";
import SkillBadge from "../shared-components/skill-badge";

const Skills = () => {
  return (
    <>
      <h4>Skills</h4>
      <div className="d-flex gap-2 flex-wrap">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </>
  );
};

export default Skills;
