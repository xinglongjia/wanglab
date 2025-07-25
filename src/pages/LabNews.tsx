import { useEffect, useState } from "react";
import type { LabNewsContent } from "../types/content";
import { loadContent } from "../utils/contentLoader";
import "./LabNews.scss";

export default function LabNews() {
  const [content, setContent] = useState<LabNewsContent>();

  useEffect(() => {
    loadContent<LabNewsContent>('content/lab_news.json').then(setContent);
  }, []);

  return (
    <div className="lab-news">
      <h2 className="page-title">{content?.title}</h2>
      <p className="to-be-continued">More to come</p>
      
      {content?.news.map((item) => (
        <div key={item.title} className="news-item">
          <h3>{item.title}</h3>
          <p> <span className="time">{item.time}</span> {item.description}</p>

          <img width={item.image_width} src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.title} />
        </div>
      ))}
    </div>
  );
}