import { useEffect, useState } from "react";
import type { ResourcesContent } from "../types/content";
import { loadContent } from "../utils/contentLoader";
import "./Resources.scss";

export default function Resources() {
  const [content, setContent] = useState<ResourcesContent>();

  useEffect(() => {
    loadContent<ResourcesContent>('content/resources.json').then(setContent);
  }, []);

  return (
    <div className="resources">
      <h2 className="page-title">{content?.title}</h2>
      {content?.panels && content.panels.map((item, index) => (
        <div key={index} className="content-item">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}