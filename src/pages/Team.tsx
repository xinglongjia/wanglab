import { useEffect, useState } from "react";
import type { TeamContent } from "../types/content";
import { loadContent } from "../utils/contentLoader";
import "./Team.scss";
export default function Team() {
  const [content, setContent] = useState<TeamContent>();

  useEffect(() => {
    loadContent<TeamContent>('content/team.json').then(setContent);
  }, []);
  
  return (
    <div className="team">
      <h2 className="page-title">{content?.title}</h2>

      {content?.members.map((member) => (
        <div key={member.name} className="member content-item">
          <div className="member-image">
            <img src={`${import.meta.env.BASE_URL}${member.image}`} alt={member.name} />
          </div>
          <div className="member-info">
            <h3>{member.name}{member.role.startsWith("-")? ' ' : ", "}{member.role}</h3>
            <p>{member.description}</p>
            <div className="member-links">
              {member.orcid && <a href={member.orcid} target="_blank" rel="noopener noreferrer">
                <img src={`${import.meta.env.BASE_URL}/assets/images/orcid.png`} alt="ORCID" />
                </a>}
              {member.google_scholar && <a href={member.google_scholar} target="_blank" rel="noopener noreferrer">
                <img src={`${import.meta.env.BASE_URL}/assets/images/Google_scholar.jpg`} alt="Google Scholar" />
                </a>}
              {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={`${import.meta.env.BASE_URL}/assets/images/linkedin.png`} alt="LinkedIn"/>
                </a>}
            </div>
          </div>
        </div>
      ))}

      <p className="to-be-continued">To be continued <br /> More to come</p>
    </div>
  );
}