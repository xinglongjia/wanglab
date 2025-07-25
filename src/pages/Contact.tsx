import { useEffect, useState } from "react";
import type { ContactContent } from "../types/content";
import { loadContent } from "../utils/contentLoader";
import GoogleMap from "../components/GoogleMap";
import "./Contact.scss";

export default function Contact() {
  const [content, setContent] = useState<ContactContent>();

  useEffect(() => {
    loadContent<ContactContent>('./content/contact.json').then(setContent);
  }, []);

  return (
    <div className="contact">
      <h2 className="page-title">{content?.title}</h2>

      <div className="contact-content">
        <div className="map-section">
          {content?.contact[0]?.address && (
            <GoogleMap address={content.contact[0].address} height="400px" />
          )}
        </div>
        <div className="contact-info">
          {content?.contact.map((item, index) => (
            <div key={index} className="contact-item">
              <p>{item.name}</p>
              <p>{item.department}</p>
              <p>{item.building}</p>
              <p>{item.address}</p>
              <p>Phone: {item.phone}</p>
              <p>Email: {item.email}</p>
            </div>
          ))}
        </div>

        <div className="links">
          <h3>Useful Links</h3>
          {content?.links.map((item, index) => (
            <div key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
            </div> 
          ))}
        </div>
      </div>

      <div className="logos">
        <img width="100px" src={content?.logos[0]} alt="Lunds University" />
        <img width="240px" src={content?.logos[1]} alt="SciLifeLab" />
      </div>
    </div>
  );
}