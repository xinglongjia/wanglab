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

          {item.image && <img width="50%" src={buildAssetPath(item.image)} alt={item.title}/>}
        </div>
      ))}

      <div className="funders-container">
        <p>We gratefully acknowledge the following funders for their generous support of our work.</p>
        <div className="funders">
          {content?.funders.map((funder) => (
            <img width={funder.image_width} src={buildAssetPath(funder.image)} alt={funder.name} />
          ))}    
        </div>
      </div>
    </div>
  );
}