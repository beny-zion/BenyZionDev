import { Translations } from '@/lib/types';

export const translations: Record<'he' | 'en', Translations> = {
  he: {
    header: {
      name: 'בני ציון',
      role: 'Full-Stack Developer',
      available: 'זמין להצעות',
      nav: { about: 'אודות', projects: 'פרויקטים', skills: 'כישורים', contact: 'צור קשר' },
    },
    hero: {
      greeting: 'היי, אני בני ציון.',
      title: 'מפתח Full-Stack שבונה מערכות שעובדות.',
      description:
        'אני מתמחה ב-React, Next.js ו-Node.js, עם פוקוס על פיתוח מהיר, נקי ומונחה AI. אוהב לקחת רעיונות ולהפוך אותם למערכות Production חיות.',
      cta: 'להריץ את קורות החיים שלי',
    },
    about: {
      command: 'GET /api/about',
      education: 'בוגר תוכנית \'מיגו\' לפיתוח תוכנה (2000 שעות הכשרה מקיפה)',
      superpower: 'פיתוח מונחה AI לקיצור זמני פיתוח והבטחת קוד איכותי',
      location: 'אשדוד, ישראל',
    },
    projects: {
      sectionTitle: 'פרויקטים',
      viewSite: 'צפה באתר',
      xrayToggle: 'מתחת למכסה המנוע',
    },
    skills: {
      sectionTitle: 'כישורים טכנולוגיים',
      query: 'SELECT * FROM skills;',
    },
    contact: {
      sectionTitle: 'צור קשר',
      getCommand: 'GET /api/contact',
      postCommand: 'POST /api/contact',
      action: 'לחץ על המייל כדי לשלוח הודעה',
      namePlaceholder: 'השם שלך',
      emailPlaceholder: 'your@email.com',
      phonePlaceholder: '050-0000000',
      optional: 'אופציונאלי',
      messagePlaceholder: 'ההודעה שלך',
      send: 'שלח',
    },
    terminal: {
      placeholder: 'הקלד פקודה... (נסה help)',
      help: 'פקודות זמינות',
      notFound: 'פקודה לא נמצאה. הקלד help לרשימת פקודות.',
    },
    footer: {
      connectedAs: 'מחובר בתור',
      contact: 'יצירת קשר',
      status: 'סטטוס',
    },
  },
  en: {
    header: {
      name: 'Beny Zion',
      role: 'Full-Stack Developer',
      available: 'Available for hire',
      nav: { about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    },
    hero: {
      greeting: "Hi, I'm Beny Zion.",
      title: 'Full-Stack Developer who builds systems that work.',
      description:
        'I specialize in React, Next.js & Node.js, with a focus on fast, clean, AI-driven development. I love turning ideas into live Production systems.',
      cta: 'Run my resume',
    },
    about: {
      command: 'GET /api/about',
      education: "Graduate of 'Migo' Software Development Program (2000 hours of intensive training)",
      superpower: 'AI-driven development for faster delivery and quality code',
      location: 'Ashdod, Israel',
    },
    projects: {
      sectionTitle: 'Projects',
      viewSite: 'View Site',
      xrayToggle: 'Under the Hood',
    },
    skills: {
      sectionTitle: 'Technical Skills',
      query: 'SELECT * FROM skills;',
    },
    contact: {
      sectionTitle: 'Contact',
      getCommand: 'GET /api/contact',
      postCommand: 'POST /api/contact',
      action: 'Click email to send a message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      phonePlaceholder: '050-0000000',
      optional: 'optional',
      messagePlaceholder: 'Your message',
      send: 'Send',
    },
    terminal: {
      placeholder: 'Type a command... (try help)',
      help: 'Available commands',
      notFound: 'Command not found. Type help for available commands.',
    },
    footer: {
      connectedAs: 'Connected as',
      contact: 'Contact',
      status: 'Status',
    },
  },
};
