import { useEffect, useState } from "react";
import type { TeamContent } from "../types/content";
import { loadContent } from "../utils/contentLoader";
import "./Team.scss";
export default function Team() {
  const [content, setContent] = useState<TeamContent>();

  useEffect(() => {
    loadContent<TeamContent>('/content/team.json').then(setContent);
  }, []);
  
  return (
    <div className="team">
      <h2 className="page-title">{content?.title}</h2>

      {content?.members.map((member) => (
        <div key={member.name} className="member">
          <div className="member-image">
            <img src={member.image} alt={member.name} />
          </div>
          <div className="member-info">
            <h3>{member.name}, {member.role}</h3>
            <p>{member.description}</p>
          </div>
        </div>
      ))}

      <p className="to-be-continued">To be continued <br /> More to come</p>
    </div>
  );
}