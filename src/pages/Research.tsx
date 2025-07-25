import { useEffect, useState } from "react";
import type { ResearchContent } from "../types/content";
import { loadContent } from "../utils/contentLoader";
import "./Research.scss";

export default function Research() {
  const [content, setContent] = useState<ResearchContent>();

  useEffect(() => {
    loadContent<ResearchContent>('content/research.json').then(setContent);
  }, []);
  
  return (
    <div className="research">
        {content && (
          <div className="content-item">
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            
            {content.aims && (
                <>
                    <p>Aims</p>
                    <ul>
                        {content.aims.map((aim, index) => (
                            <li key={index}>{aim}</li>
                        ))}
                    </ul>
                </>
            )}
          </div>
        )}
      <img width="50%" src={`${import.meta.env.BASE_URL}${content?.image}`} alt="iPanCare" />
    </div>
  );
}