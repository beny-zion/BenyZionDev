export type Language = 'he' | 'en';

export interface Project {
  id: string;
  title: string;
  description: { he: string; en: string };
  xray: { he: string; en: string };
  url: string;
  tech: string[];
  image: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Translations {
  header: {
    name: string;
    role: string;
    available: string;
    nav: { about: string; projects: string; skills: string; contact: string };
  };
  hero: {
    greeting: string;
    title: string;
    description: string;
    cta: string;
  };
  about: {
    command: string;
    education: string;
    superpower: string;
    location: string;
  };
  projects: {
    sectionTitle: string;
    viewSite: string;
    xrayToggle: string;
  };
  skills: {
    sectionTitle: string;
    query: string;
  };
  contact: {
    sectionTitle: string;
    getCommand: string;
    postCommand: string;
    action: string;
    namePlaceholder: string;
    messagePlaceholder: string;
    send: string;
  };
  terminal: {
    placeholder: string;
    help: string;
    notFound: string;
  };
  footer: {
    connectedAs: string;
    contact: string;
    status: string;
  };
}
