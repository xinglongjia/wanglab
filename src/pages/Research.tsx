import { useEffect, useState } from "react";
import type { ResearchContent } from "../types/content";
import { loadContent } from "../utils/contentLoader";
import "./Research.scss";
import { buildAssetPath } from "../utils/pathBuilder";

export default function Research() {
  const [content, setContent] = useState<ResearchContent>();

  useEffect(() => {
    loadContent<ResearchContent>('content/research.json').then(setContent);
  }, []);
  
  return (
    <div className="research">
      <h2 className="page-title">{content?.title}</h2>
        {content && (
          <div className="content-item">
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
      <img width="50%" src={buildAssetPath(content?.image)} alt="iPanCare" />
    </div>
  );
}