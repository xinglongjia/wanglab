import { useEffect, useState } from "react";
import type { HomeContent } from "../types/content";
import { loadContent } from "../utils/contentLoader";
import "./Home.scss";
import { buildAssetPath } from "../utils/pathBuilder";

export default function Home() {
  const [content, setContent] = useState<HomeContent>();

  useEffect(() => {
    loadContent<HomeContent>('content/home.json').then(setContent);
  }, []);

  return (
    <div className="home">
      <h2 className="page-title">{content?.title}</h2>
      {content?.panels && content.panels.map((item, index) => (
        <div key={index} className="content-item">
          {item.title && <h2>{item.title}</h2>}
          <p>{item.description}</p>
        </div>
      ))}
      
      <img width="50%" src={buildAssetPath(content?.image)} alt="Lab Value" />
    </div>
  );
}