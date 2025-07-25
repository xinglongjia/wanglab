import { useEffect, useState, useMemo } from "react";
import type { PublicationContent } from "../types/content";
import { loadContent } from "../utils/contentLoader";
import "./Publications.scss";

export default function Publications() {
  const [content, setContent] = useState<PublicationContent>();

  useEffect(() => {
    loadContent<PublicationContent>('./content/publications.json').then(setContent);
  }, []);

  // Group publications by year and sort in decreasing order
  const groupedPublications = useMemo(() => {
    if (!content?.publications) return {};

    const grouped = content.publications.reduce((acc, publication) => {
      const year = publication.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(publication);
      return acc;
    }, {} as Record<string, typeof content.publications>);

    // Sort years in decreasing order
    const sortedYears = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a));
    return { grouped, sortedYears };
  }, [content]);

  return (
    <div className="publications">
      <h2 className="page-title">{content?.title}</h2>

      <div className="publications-list">
        {groupedPublications.sortedYears?.map((year) => (
          <div key={year} className="year-group">
            <h3 className="year-title">{year}</h3>
            <div className="year-publications">
              {groupedPublications.grouped[year].map((publication, index) => (
                <div key={`${publication.title}-${index}`} className="publication-item">
                  <a className="publication-title" href={publication.link} target="_blank">{publication.title}</a>
                  <p className="publication-authors">{publication.authors}</p>
                  <p className="publication-journal">
                    <b>{publication.journal}</b>
                    {publication.volume && `, ${publication.volume}`}
                    {publication.pages && `, ${publication.pages}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}