export interface ContentData {
  title: string;
  description: string;
  image: string;
}

export interface HomeContent extends ContentData {
  panels: ContentData[];
}

export interface ResearchContent extends ContentData {
  aims: string[];
} 

export interface TeamContent extends ContentData {
  members: {
    name: string;
    role: string;
    image: string;
    description: string;
    orcid?: string;
    google_scholar?: string;
    linkedin?: string;
    reasearch_gate?: string;
  }[];
  alumni: {
    name: string;
    role: string;
    linkedin?: string;
  }[];
}

export interface LabNewsContent extends ContentData {
  news: {
    title: string;
    time: string;
    description: string;
    image?: string;
    image_width?: string;
  }[];
}

export interface PublicationContent extends ContentData {
    publications: {
        title: string;
        link: string;
        authors: string;
        journal: string;
        year: string;
        volume: string;
        pages: string;
    }[];    
}

export interface ResourcesContent extends ContentData {
    panels: ContentData[];
}

export interface ContactContent extends ContentData {
    contact: {
        name: string;
        email: string;
        phone: string;
        building: string;
        department: string;
        address: string;
    }[];
    links: {
        name: string;
        link: string;
    }[];
    logos: string[];
}