interface SkillBadgeProps {
  skill: string;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <span
      style={{
        color: "#ccd6f6",
        backgroundColor: "rgb(99 164 241 / 27%)",
        fontSize: "0.8rem",
      }}
      className="px-3 py-1 rounded-4"
    >
      {skill}
    </span>
  );
};

export default SkillBadge;
